import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Positioning as SbPositioning } from "./positioning";
import { RenderProp as SbRenderProp } from "./render-prop";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Hover Card"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Positioning: Story = {
  render: (args) => <SbPositioning {...args} />
};

export const RenderProp: Story = {
  render: (args) => <SbRenderProp {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
