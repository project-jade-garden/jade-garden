import type { Cheerio, CheerioAPI } from "cheerio";
import * as cheerio from "cheerio";
import { camelCase, kebabCase, pascalCase, snakeCase } from "es-toolkit";

const findTable = ($any: Cheerio<any>): Cheerio<any> | undefined => {
	const $el = $any.next();
	const tagName = $el.get(0)?.tagName;

	if (!tagName || tagName === "h2" || tagName === "h3") return undefined;

	const tableHead = $el.find("table thead th").text();
	return tableHead.toLowerCase().includes("data attribute")
		? $el.find("table tbody tr")
		: findTable($el);
};

export const cheerioSiteMaps = {
	"ark-ui": ($: CheerioAPI, slots: string[], _?: string) => {
		const description = $("h1 + p").text();
		const traitsType: Record<string, Record<string, string>> = {};

		for (const slot of slots) {
			const $slotHeader = $(`h3:contains("${pascalCase(slot)}")`).filter(
				function () {
					return $(this).text() === pascalCase(slot);
				},
			);
			const $tableRows = findTable($slotHeader);

			if ($tableRows) {
				const traits: Record<string, string> = {};

				$tableRows.each((_, _tableRow) => {
					const $tableRow = cheerio.load(_tableRow);
					const [dataAttribute, value] = $tableRow("td").text().split("]");

					const trait = dataAttribute.split("-")[1];
					traits[trait] = value;
				});

				traitsType[slot] = traits;
			}
		}

		return { description, traitsType };
	},
	"base-ui": ($: CheerioAPI, slots: string[], _?: string) => {
		const description = $("h1 + p").text();
		const traitsType: Record<string, Record<string, string>> = {};

		for (const slot of slots) {
			const $slotHeader = $(`#${kebabCase(slot)}`);
			const $tableRows = findTable($slotHeader);

			if ($tableRows) {
				const traits: Record<string, string> = {};

				$tableRows.each((_, _tableRow) => {
					const $tableRow = cheerio.load(_tableRow);
					const dataAttribute = $tableRow("th code").text();
					const value = $tableRow("td p").text();

					const trait = dataAttribute.split("data-")[1];
					traits[trait] = value;
				});

				traitsType[slot] = traits;
			}
		}

		return { description, traitsType };
	},
	// * NOTE: Bits UI docs content elements are deeply nested and requires custom logic.
	// TODO: Unstable - WIP
	"bits-ui": ($: CheerioAPI, slots: string[], _?: string) => {
		const description = $("h1 + p").text();
		const traitsType: Record<string, Record<string, string>> = {};

		const findBitsTable = ($any: Cheerio<any>): Cheerio<any> | undefined => {
			const $tableHead = $any.find("table thead tr th");

			if (
				$tableHead.text().includes("undefined") ||
				$tableHead.length === 0 ||
				$tableHead.text().length === 0
			) {
				return undefined;
			}

			if ($tableHead.text().toLowerCase().includes("data attribute")) {
				console.log($any.find("table tbody tr td").text());
				return $any.find("table tbody tr td");
			}

			return findBitsTable($any.next());
		};

		for (const slot of slots) {
			const $slotHeader = $(`#${snakeCase(slot).split("_").join("")}`);

			const $tableRows = findBitsTable(
				$slotHeader.parent().parent().find(".flex.flex-col.gap-4 div"),
			);

			if ($tableRows) {
				const traits: Record<string, string> = {};

				$tableRows.each((_, _tableRow) => {
					const $tableRow = cheerio.load(_tableRow);
					const $td = $tableRow("td");
					const [dataAttribute, value] = [$td.eq(0).text(), $td.eq(1).text()];

					const trait = dataAttribute.split("data-")[1];
					traits[trait] = value;
				});

				traitsType[slot] = traits;
			}
		}

		return { description, traitsType };
	},
	// * NOTE: Kobalte docs includes "shares the same data-attributes" which requires more custom logic.
	kobalte: ($: CheerioAPI, slots: string[], component: string) => {
		const description = $("h1 + p").text();
		const traitsType: Record<string, Record<string, string>> = {};

		const findKobalteTable = (
			$any: Cheerio<any>,
			component: string,
		): { $tableRows: Cheerio<any>; sharedSlots?: string[] } | undefined => {
			const $el = $any.next();
			const tagName = $el.get(0)?.tagName;

			if (!tagName || tagName === "h2" || tagName === "h3") return undefined;

			const tableHead = $el.find("table thead tr").text();

			if (tableHead.toLowerCase().includes("data attribute")) {
				const $tableRows = $el.find("table tbody tr");
				const $p = $el.next();

				if ($p.text().includes("shares the same data-attributes")) {
					const $labels = $p.find("code");
					let sharedSlots: string[] = [];

					$labels.each((_, _label) => {
						const $label = cheerio.load(_label);
						const title = pascalCase(component);

						sharedSlots = $label
							.text()
							.split(`${title}.`)
							.map((c) => camelCase(c));
					});

					return { $tableRows, sharedSlots };
				}

				return { $tableRows };
			}

			return findKobalteTable($el, component);
		};

		for (const slot of slots) {
			const isRoot = slot === "root";
			let $slotHeader = $(
				`#${snakeCase(isRoot ? component : component + slot)
					.split("_")
					.join("")}`,
			);

			if (!$slotHeader.length && isRoot) {
				$slotHeader = $(
					`#${snakeCase(isRoot ? component : component + slot)
						.split("_")
						.join("")}-1`,
				);
			}

			const res = findKobalteTable($slotHeader, component);

			if (res?.$tableRows) {
				const { $tableRows } = res;
				const traits: Record<string, string> = {};

				$tableRows.each((_, _tableRow) => {
					const $tableRow = cheerio.load(_tableRow);
					const $td = $tableRow("td");
					const [dataAttribute, value] = [$td.eq(0).text(), $td.eq(1).text()];

					const trait = dataAttribute.split("data-")[1];
					traits[trait] = value;
				});

				traitsType[slot] = traits;
			}
		}

		return { description, traitsType };
	},
	"radix-ui": ($: CheerioAPI, slots: string[], _?: string) => {
		const description = $("h1 + p").text();
		const traitsType: Record<string, Record<string, string>> = {};

		for (const slot of slots) {
			const $slotHeader = $(`#${kebabCase(slot)}`);
			const $tableRows = findTable($slotHeader);

			if ($tableRows) {
				const traits: Record<string, string> = {};

				$tableRows.each((_, _tableRow) => {
					const $tableRow = cheerio.load(_tableRow);
					const [dataAttribute, value] = $tableRow("th, td").text().split("]");

					const trait = dataAttribute.split("data-")[1];
					traits[trait] = value;
				});

				traitsType[slot] = traits;
			}
		}

		return { description, traitsType };
	},
	"reka-ui": ($: CheerioAPI, slots: string[], _?: string) => {
		const description = $("div.mb-4.md\\:text-lg").text();
		const traitsType: Record<string, Record<string, string>> = {};

		for (const slot of slots) {
			const $slotHeader = $(`#${kebabCase(slot)}`);
			const $tableRows = findTable($slotHeader);

			if ($tableRows) {
				const traits: Record<string, string> = {};

				$tableRows.each((_, _tableRow) => {
					const $tableRow = cheerio.load(_tableRow);
					const [dataAttribute, value] = $tableRow("td").text().split("]");

					const trait = dataAttribute.split("data-")[1];
					traits[trait] = value;
				});

				traitsType[slot] = traits;
			}
		}

		return { description, traitsType };
	},
};

export const SITE_MAPS = {
	"ark-ui": {
		repo: (component: string) =>
			`https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/${kebabCase(component)}/${kebabCase(component)}.anatomy.ts`,
		site: "https://ark-ui.com/docs/components",
	},
	"base-ui": {
		repo: (component: string) =>
			`https://github.com/mui/base-ui/blob/master/packages/react/src/${kebabCase(component)}/index.parts.ts`,
		site: "https://base-ui.com/react/components",
	},
	"bits-ui": {
		repo: (component: string) =>
			`https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/${kebabCase(component)}/exports.ts`,
		site: "https://www.bits-ui.com/docs/components",
	},
	kobalte: {
		repo: (component: string) =>
			`https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/${kebabCase(component)}/index.tsx`,
		site: "https://kobalte.dev/docs/core/components",
	},
	"radix-ui": {
		repo: (component: string) =>
			`https://github.com/radix-ui/primitives/blob/main/packages/react/${kebabCase(component)}/src/index.ts`,
		site: "https://www.radix-ui.com/primitives/docs/components",
	},
	"reka-ui": {
		repo: (component: string) =>
			`https://github.com/unovue/reka-ui/blob/v2/packages/core/src/${pascalCase(component)}/index.ts`,
		site: "https://reka-ui.com/docs/components",
	},
};
