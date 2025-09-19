#!/usr/bin/env node
import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { intro, outro } from "@clack/prompts";
import { writeConfigs, writeStylesheets } from "./generators";
import type { Config } from "./types";
import { cancelBuild, logs, WARNING } from "./utils";
import { getConfig } from "./utils/get-config";

// * Handle exits
process.on("SIGINT", cancelBuild);
process.on("SIGTERM", cancelBuild);

const main = async () => {
  console.clear();

  intro(logs.success("Jade Garden 🌿", false));

  // * Read config
  const rawConfig = await getConfig();

  if (!rawConfig) {
    WARNING.NoConfig();
    cancelBuild();
  }

  const config = {
    clean: rawConfig?.clean ?? false,
    compile: rawConfig?.compile ?? false,
    components: rawConfig?.components ?? {},
    configOutput: rawConfig?.configOutput ?? "ts",
    createOptions: rawConfig?.createOptions ?? {},
    entry: rawConfig?.entry ?? process.cwd(),
    metaConfig: rawConfig?.metaConfig ?? {},
    outDir: rawConfig?.outDir ?? `${process.cwd()}/jade-garden`,
    silent: rawConfig?.silent ?? false
  } satisfies Required<Config>;

  if (typeof config.components !== "object" || Array.isArray(config.components)) {
    if (!config.silent) logs.warning("`components` must be a object.");
    cancelBuild();
  }

  const { clean, createOptions } = config;
  const useStylesheet = createOptions.useStylesheet ?? false;

  // * Get output directory path
  const outDirPath = join(config.outDir);

  // * Clean
  if (clean && existsSync(outDirPath)) rmSync(outDirPath, { recursive: true });

  // * Write
  if (useStylesheet) writeStylesheets(config, outDirPath);
  else writeConfigs(config, outDirPath);

  if (!config.silent) {
    logs.success(`Complete! ${useStylesheet ? "Stylesheets" : "Configs"} have been successfully generated.`);
  }

  outro(logs.success("Excited to see what you grow 🌱", false));
};

main().catch((error) => {
  logs.error(`Error running @jade-garden/cli:\n${error}`);
  process.exit(1);
});

export type { Config } from "./types";
