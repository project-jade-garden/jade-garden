import type { Meta } from "@storybook/svelte";
import SbBasic from "./index.svelte";

export default {
  title: "Bits UI / Accordion"
} satisfies Meta;

export const Basic = {
  render: () => ({
    Component: SbBasic
  })
};
