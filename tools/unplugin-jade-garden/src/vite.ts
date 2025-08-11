import { createVitePlugin, type VitePlugin } from "unplugin";
import { factory, type PluginInstance } from "./core";

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import { defineConfig } from "vite";
 * import jadeGardenPlugin from "unplugin-jade-garden/vite";
 *
 * export default defineConfig({
 *   plugins: [jadeGardenPlugin()]
 * })
 * ```
 */
const plugin: PluginInstance<VitePlugin | VitePlugin[]> = createVitePlugin(factory);
export default plugin;
