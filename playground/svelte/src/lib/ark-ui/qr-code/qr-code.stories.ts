import type { Meta } from "@storybook/svelte";
import SbBasic from "./index.svelte";

export default {
  title: "Ark UI / QR Code"
} satisfies Meta;

export const Basic = {
  render: () => ({
    Component: SbBasic
  })
};
