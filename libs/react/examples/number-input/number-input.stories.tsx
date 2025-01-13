import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { FormUsage as SbFormUsage } from "./form-usage";
import { Formatted as SbFormatted } from "./formatted";
import { FractionDigits as SbFractionDigits } from "./fraction-digits";
import { MinMax as SbMinMax } from "./min-max";
import { MouseWheel as SbMouseWheel } from "./mouse-wheel";
import { NoClamp as SbNoClamp } from "./no-clamp";
import { RenderFn as SbRenderFn } from "./render-fn";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Scrubber as SbScrubber } from "./scrubber";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / Number Input"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const FormUsage: Story = {
  render: (args) => <SbFormUsage {...args} />
};

export const Formatted: Story = {
  render: (args) => <SbFormatted {...args} />
};

export const FractionDigits: Story = {
  render: (args) => <SbFractionDigits {...args} />
};

export const MinMax: Story = {
  render: (args) => <SbMinMax {...args} />
};

export const MouseWheel: Story = {
  render: (args) => <SbMouseWheel {...args} />
};

export const NoClamp: Story = {
  render: (args) => <SbNoClamp {...args} />
};

export const RenderFn: Story = {
  render: (args) => <SbRenderFn {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Scrubber: Story = {
  render: (args) => <SbScrubber {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
