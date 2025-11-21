#!/usr/bin/env node
import { join } from "node:path";
import { intro, outro } from "@clack/prompts";
import { getConfig, writeConfigs } from "./configs";
import type { Config } from "./types";
import { cancelBuild, logs, WARNING } from "./utils";

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
    styles: rawConfig?.styles || {},
    configOutput: rawConfig?.configOutput || "ts",
    metaConfig: rawConfig?.metaConfig || {},
    outDir: rawConfig?.outDir || `${process.cwd()}/jade-garden`,
    silent: rawConfig?.silent || false
  } satisfies Required<Config>;

  if (typeof config.styles !== "object" || Array.isArray(config.styles)) {
    if (!config.silent) logs.warning("`styles` must be a object.");
    cancelBuild();
  }

  // * Get output directory path
  const outDirPath = join(config.outDir);

  // * Write
  writeConfigs(config, outDirPath);

  if (!config.silent) {
    logs.success("Complete! Component configs have been successfully generated.");
  }

  outro(logs.success("Excited to see what you grow 🌱", false));
};

main().catch((error) => {
  logs.error(`Error running @jade-garden/cli:\n${error}`);
  process.exit(1);
});
