import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import { kebabCase, startCase, trim } from "es-toolkit";
import { cheerioSiteMaps, SITE_MAPS } from "./utils";

const TARGET = "ark-ui";

const __dirname = join(
	dirname(fileURLToPath(import.meta.url)),
	"..",
	"..",
	"projects",
	TARGET,
);

const loadSiteData = async (url: string) => {
	const res = await fetch(url);
	const $ = await cheerio.load(await res.text());
	return $;
};

const main = async () => {
	const { components }: { components: { [key: string]: string[] } } =
		await import(`${__dirname}/tests/data.ts`);
	const srcDir = `${__dirname}/src`;

	if (existsSync(srcDir)) {
		rmSync(srcDir, { recursive: true, force: true });
	}

	mkdirSync(srcDir);

	const { repo, site } = SITE_MAPS[TARGET];
	for (const component of Object.keys(components)) {
		const $ = await loadSiteData(`${site}/${kebabCase(component)}`);
		const slots = components[component];

		const { description, traitsType } = cheerioSiteMaps[TARGET](
			$,
			slots,
			component,
		);

		writeFileSync(
			`${srcDir}/${kebabCase(component)}.ts`,
			`// * ${repo(component)}
import type { SVATraits } from "jade-garden";

/**
 * **${startCase(component)}**
 * @description ${trim(description)}
 * @see [source](${site}/${kebabCase(component)}#anatomy)
 */
export const slots = ${JSON.stringify(slots)} as const;

/**
 * **${startCase(component)}**
 * @description ${trim(description)}
 * @see [source](${site}/${kebabCase(component)}#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **${startCase(component)}**
 * @description ${trim(description)}
 * @see [source](${site}/${kebabCase(component)}#api-reference)
 */
export type Traits = SVATraits<Slots, ${JSON.stringify(traitsType)}>;
`,
		);
	}

	// * Creates empty file
	writeFileSync(`${srcDir}/index.ts`, "");
};

// ! Uncomment only when creating a new project and AFTER setting up a tests/data.ts with a `components` export.
// await main();
