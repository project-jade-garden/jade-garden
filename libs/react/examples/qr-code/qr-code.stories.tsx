import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / QR Code"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
