import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Arrow as SbArrow } from "./arrow";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Positioning as SbPositioning } from "./positioning";
import { RenderFn as SbRenderFn } from "./render-fn";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Timings as SbTimings } from "./timings";

export default {
  title: "Components / Tooltip"
} satisfies Meta;

export const Arrow: Story = {
  render: (args) => <SbArrow {...args} />
};

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Positioning: Story = {
  render: (args) => <SbPositioning {...args} />
};

export const RenderFn: Story = {
  render: (args) => <SbRenderFn {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Timings: Story = {
  render: (args) => <SbTimings {...args} />
};
