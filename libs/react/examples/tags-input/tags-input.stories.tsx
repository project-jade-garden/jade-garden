import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { BlurBehavior as SbBlurBehavior } from "./blur-behavior";
import { DisabledEditing as SbDisabledEditing } from "./disabled-editing";
import { InitialValue as SbInitialValue } from "./initial-value";
import { MaxWithOverflow as SbMaxWithOverflow } from "./max-with-overflow";
import { OnEvent as SbOnEvent } from "./on-event";
import { PasteBehavior as SbPasteBehavior } from "./paste-behavior";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Validated as SbValidated } from "./validated";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / Tags Input"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const BlurBehavior: Story = {
  render: (args) => <SbBlurBehavior {...args} />
};

export const DisabledEditing: Story = {
  render: (args) => <SbDisabledEditing {...args} />
};

export const InitialValue: Story = {
  render: (args) => <SbInitialValue {...args} />
};

export const MaxWithOverflow: Story = {
  render: (args) => <SbMaxWithOverflow {...args} />
};

export const OnEvent: Story = {
  render: (args) => <SbOnEvent {...args} />
};

export const PasteBehavior: Story = {
  render: (args) => <SbPasteBehavior {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Validated: Story = {
  render: (args) => <SbValidated {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
