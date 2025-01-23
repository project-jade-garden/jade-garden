import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Disabled as SbDisabled } from "./disabled";
import { FormUsage as SbFormUsage } from "./form-usage";
import { HalfRatings as SbHalfRatings } from "./half-ratings";
import { InitialValue as SbInitialValue } from "./initial-value";
import { ReadOnly as SbReadOnly } from "./read-only";
import { RootProvider as SbRootProvider } from "./root-provider";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / Rating Group"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Disabled: Story = {
  render: (args) => <SbDisabled {...args} />
};

export const FormUsage: Story = {
  render: (args) => <SbFormUsage {...args} />
};

export const HalfRatings: Story = {
  render: (args) => <SbHalfRatings {...args} />
};

export const InitialValue: Story = {
  render: (args) => <SbInitialValue {...args} />
};

export const ReadOnly: Story = {
  render: (args) => <SbReadOnly {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
