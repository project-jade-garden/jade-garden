import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Events as SbEvents } from "./events";
import { RenderProp as SbRenderProp } from "./render-prop";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Vertical as SbVertical } from "./vertical";

export default {
  title: "Components / Splitter"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Events: Story = {
  render: (args) => <SbEvents {...args} />
};

export const RenderProp: Story = {
  render: (args) => <SbRenderProp {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Vertical: Story = {
  render: (args) => <SbVertical {...args} />
};
