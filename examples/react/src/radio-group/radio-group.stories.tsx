import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Disabled as SbDisabled } from "./disabled";
import { InitialValue as SbInitialValue } from "./initial-value";
import { OnEvent as SbOnEvent } from "./on-event";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Radio Group"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Disabled: Story = {
  render: (args) => <SbDisabled {...args} />
};

export const InitialValue: Story = {
  render: (args) => <SbInitialValue {...args} />
};

export const OnEvent: Story = {
  render: (args) => <SbOnEvent {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
