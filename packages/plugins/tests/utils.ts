import { resolve } from "node:path";
// * NOTE: Moved webpack out to isolate deprecation warnings from it
import * as rspack from "@rspack/core";
import * as rollup from "rollup";
import * as vite from "vite";

type BuildConfigs = {
  rollup: typeof rollupBuild;
  rspack: typeof rspackBuild;
  vite: typeof viteBuild;
};

export const rollupBuild: typeof rollup.rollup = rollup.rollup;
export const rspackBuild: typeof rspack.rspack = rspack.rspack;
export const viteBuild: typeof vite.build = vite.build;

export const getPath = (entry: string) => resolve(__dirname, entry);

export const build: BuildConfigs = {
  rollup: rollupBuild,
  rspack: rspackBuild,
  vite(config) {
    return viteBuild(
      vite.mergeConfig(config || {}, {
        build: {
          rollupOptions: {
            logLevel: "silent"
          }
        },
        logLevel: "silent"
      })
    );
  }
};
