import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { LazyMount as SbLazyMount } from "./lazy-mount";
import { RenderFn as SbRenderFn } from "./render-fn";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Dialog"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const LazyMount: Story = {
  render: (args) => <SbLazyMount {...args} />
};

export const RenderFn: Story = {
  render: (args) => <SbRenderFn {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
