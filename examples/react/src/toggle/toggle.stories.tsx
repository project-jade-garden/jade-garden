import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Disabled as SbDisabled } from "./disabled";
import { Indicator as SbIndicator } from "./indicator";

export default {
  title: "Components / Toggle"
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

export const Indicator: Story = {
  render: (args) => <SbIndicator {...args} />
};
