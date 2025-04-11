import { type VitePlugin, createVitePlugin } from "unplugin";
import { type PluginInstance, factory } from "./core";

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import { defineConfig } from "vite";
 * import jadeGardenPlugin from "@jade-garden/vite";
 *
 * export default defineConfig({
 *   plugins: [jadeGardenPlugin()]
 * })
 * ```
 */
const plugin: PluginInstance<VitePlugin | VitePlugin[]> = createVitePlugin(factory);
export default plugin;
export { plugin as "module.exports" };
