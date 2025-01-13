import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { RenderFn as SbRenderFn } from "./render-fn";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Clipboard"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const RenderFn: Story = {
  render: (args) => <SbRenderFn {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
