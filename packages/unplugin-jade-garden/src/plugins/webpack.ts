import { createWebpackPlugin, type WebpackPluginInstance } from "unplugin";
import { factory, type PluginInstance } from "../core";

/**
 * Webpack plugin
 *
 * @example
 * ```js
 * // webpack.config.js
 * import jadeGardenPlugin from "unplugin-jade-garden/webpack";
 *
 * default export {
 *  plugins: [jadeGardenPlugin()]
 * }
 * ```
 */
const plugin: PluginInstance<WebpackPluginInstance> = createWebpackPlugin(factory);
export default plugin;
