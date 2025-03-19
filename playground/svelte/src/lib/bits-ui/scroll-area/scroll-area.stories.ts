import type { Meta } from "@storybook/svelte";
import SbBasic from "./index.svelte";

export default {
  title: "Bits UI / Scroll Area"
} satisfies Meta;

export const Basic = {
  render: () => ({
    Component: SbBasic
  })
};
