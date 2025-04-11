import { resolve } from "node:path";
// * NOTE: Moved webpack out to isolate deprecation warnings from it
import * as rspack from "@rspack/core";
import * as esbuild from "esbuild";
import * as rollup from "rollup";
import * as vite from "vite";

type Arrayable<T> = T | Array<T>;

type BuildConfigs = {
  esbuild: typeof esbuildBuild;
  rollup: typeof rollupBuild;
  rspack: typeof rspackBuild;
  vite: typeof viteBuild;
};

type Nullable<T> = T | null | undefined;

export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  const res = array || [];
  return Array.isArray(res) ? res : [res];
}

export const esbuildBuild: typeof esbuild.build = esbuild.build;
export const rollupBuild: typeof rollup.rollup = rollup.rollup;
export const rspackBuild: typeof rspack.rspack = rspack.rspack;
export const viteBuild: typeof vite.build = vite.build;

// ! Keep parent directory ("/..") to get out of utils
export const getPath = (entry: string) => resolve(`${__dirname}/..`, entry);

export const build: BuildConfigs = {
  esbuild: esbuildBuild,
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
