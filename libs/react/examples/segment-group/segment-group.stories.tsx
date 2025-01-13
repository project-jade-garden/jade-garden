import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Disabled as SbDisabled } from "./disabled";
import { InitialValue as SbInitialValue } from "./initial-value";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Segment Group"
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

export const InitialValue: Story = {
  render: (args) => <SbInitialValue {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
