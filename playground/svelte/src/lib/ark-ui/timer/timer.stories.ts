import type { Meta } from "@storybook/svelte";

import SbBasic from "./index.svelte";

const meta = {
  title: "Ark UI / Timer"
} as Meta;

export default meta;

export const Basic = {
  render: () => ({
    Component: SbBasic
  })
};
