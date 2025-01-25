import { createSlots } from "@spark-css/core/steps";
/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 *
 * @returns
 * ```js
 * {
 *   base: "steps",
 *   root: "steps__root",
 *   list: "steps__list",
 *   item: "steps__item",
 *   trigger: "steps__trigger",
 *   indicator: "steps__indicator",
 *   separator: "steps__separator",
 *   content: "steps__content",
 *   nextTrigger: "steps__next-trigger",
 *   prevTrigger: "steps__prev-trigger",
 *   progress: "steps__progress"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef {import("@spark-css/core/steps").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
    base: slots.base,
    root: slots.root,
    list: slots.list,
    item: slots.item,
    trigger: slots.trigger,
    indicator: slots.indicator,
    separator: slots.separator,
    content: slots.content,
    nextTrigger: slots.nextTrigger,
    prevTrigger: slots.prevTrigger,
    progress: slots.progress
};
/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 *
 * @example
 * ```css
 * .steps { }
 *
 * .steps__root { }
 *
 * .steps__list { }
 *
 * .steps__item { }
 *
 * .steps__trigger { }
 *
 * .steps__indicator { }
 *
 * .steps__separator { }
 *
 * .steps__content { }
 *
 * .steps__next-trigger { }
 *
 * .steps__prev-trigger { }
 *
 * .steps__progress { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export const steps = styledSlots;
