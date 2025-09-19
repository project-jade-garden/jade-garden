// @ts-expect-error: there is no DTS for this.
import babelPresetTypeScript from "@babel/preset-typescript";
import { loadConfig as c12 } from "c12";
import parseArgs from "minimist";
import type { Config } from "../types";
import { cancelBuild } from ".";
import { logs, WARNING } from "./logs";

let possiblePaths = [
  "jade-garden.config.js",
  "jade-garden.config.ts",
  "jade-garden.js",
  "jade-garden.ts",
  "jade.config.js",
  "jade.config.ts",
  "jade.js",
  "jade.ts"
];

possiblePaths = [
  ...possiblePaths,
  ...possiblePaths.map((it) => `configs/${it}`),
  ...possiblePaths.map((it) => `styles/${it}`),
  ...possiblePaths.map((it) => `css/${it}`),
  ...possiblePaths.map((it) => `lib/${it}`)
];
possiblePaths = [
  ...possiblePaths,
  ...possiblePaths.map((it) => `src/${it}`),
  ...possiblePaths.map((it) => `app/${it}`)
];

const loadConfig = async (configFilePath: string): Promise<Config> => {
  const { config } = await c12<Config>({
    configFile: configFilePath,
    jitiOptions: {
      transformOptions: {
        babel: {
          presets: [
            [
              babelPresetTypeScript,
              {
                allExtensions: true
              }
            ]
          ]
        }
      },
      extensions: [".ts", ".js"]
    }
  });

  return config;
};

export const getConfig = async (): Promise<Config | undefined | null> => {
  try {
    let rawConfig: Config | null = null;

    const configPath: string | string[] | undefined = parseArgs(process.argv.slice(2))?.config;

    if (configPath) {
      if (typeof configPath === "string") {
        const config = await loadConfig(configPath);

        if (!("components" in config)) {
          logs.warning(
            `Couldn't read your config in "${configPath}". Make sure to default export your config and set \`components\`.`
          );
          cancelBuild();
        }

        rawConfig = config;
      } else if (Array.isArray(configPath) && !configPath.length) {
        logs.warning("Specifiy only one relative path with the '--config' flag");
        cancelBuild();
      }
    } else {
      for (const possiblePath of possiblePaths) {
        const config = await loadConfig(possiblePath);

        if ("components" in config) {
          rawConfig = config;
          break;
        }
      }

      if (rawConfig === null || !("components" in rawConfig)) {
        WARNING.NoConfig();
        cancelBuild();
      }
    }

    return rawConfig;
  } catch {
    logs.error("There was an issue attempting to read your config.");
    cancelBuild();
  }
};
