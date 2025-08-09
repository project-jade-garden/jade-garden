import { readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { camelCase, pascalCase } from "es-toolkit";
import { globbySync } from "globby";
import { readPackageJSON, writePackageJSON } from "pkg-types";

const EXCLUDE_DIRS: string[] = [".DS_Store", "README.md"];

type PkgExports = {
	[key: string]: {
		source: string;
		import: {
			types: string;
			default: string;
		};
		require: {
			types: string;
			default: string;
		};
	};
};

const __dirname = join(
	dirname(fileURLToPath(import.meta.url)),
	"..",
	"..",
	"projects",
);
const libDirs = readdirSync(__dirname);

const main = async () => {
	for (const libDir of libDirs.filter(
		(libDir) => !EXCLUDE_DIRS.includes(libDir),
	)) {
		const dir = `${__dirname}/${libDir}`;
		const pkg = await readPackageJSON(dir);
		const files = globbySync(`${dir}/src/*.ts`).sort();
		const pkgExports: PkgExports = {
			".": {
				source: "./src/index.ts",
				import: {
					types: "./dist/index.d.ts",
					default: "./dist/index.js",
				},
				require: {
					types: "./dist/index.d.cts",
					default: "./dist/index.cjs",
				},
			},
		};
		let srcExports = "";

		for (const file of files) {
			const component = file
				.replace("src/", "")
				.replace(".ts", "")
				.split(libDir)[1];
			if (component === "/index") continue;

			pkgExports[`.${component}`] = {
				source: `./src${component}.ts`,
				import: {
					types: `./dist${component}.d.ts`,
					default: `./dist${component}.js`,
				},
				require: {
					types: `./dist${component}.d.cts`,
					default: `./dist${component}.cjs`,
				},
			};

			srcExports += `\nexport {
      slots as ${camelCase(component)}Slots,
      type Slots as ${pascalCase(component)}Slots,
      type Traits as ${pascalCase(component)}Traits
      } from ".${component}";`;
		}

		pkg.exports = pkgExports;

		writeFileSync(`${dir}/src/index.ts`, srcExports);
		await writePackageJSON(`${dir}/package.json`, pkg);
	}
};

await main();
