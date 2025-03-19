import type { Meta } from "@storybook/svelte";
import SbBasic from "./index.svelte";

export default {
  title: "Ark UI / Avatar"
} as Meta;

export const Basic = {
  render: () => ({
    Component: SbBasic
  })
};
