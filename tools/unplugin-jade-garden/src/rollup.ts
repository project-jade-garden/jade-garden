import { type RollupPlugin, createRollupPlugin } from "unplugin";
import { type PluginInstance, factory } from "./core";

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
export { plugin as "module.exports" };
