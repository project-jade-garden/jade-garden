import { createRollupPlugin, type RollupPlugin } from "unplugin";
import { factory, type PluginInstance } from "./core";

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import jadeGardenPlugin from "unplugin-jade-garden/rollup";
 *
 * export default {
 *   plugins: [jadeGardenPlugin()]
 * }
 * ```
 */
const plugin: PluginInstance<RollupPlugin<any> | RollupPlugin<any>[]> = createRollupPlugin(factory);
export default plugin;
