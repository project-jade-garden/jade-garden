import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Blurred as SbBlurred } from "./blurred";
import { Customized as SbCustomized } from "./customized";
import { InitialValue as SbInitialValue } from "./initial-value";
import { OTPMode as SbOTPMode } from "./otp-mode";
import { RootProvider as SbRootProvider } from "./root-provider";
import { WithAutofocus as SbWithAutofocus } from "./with-autofocus";
import { WithField as SbWithField } from "./with-field";
import { WithMask as SbWithMask } from "./with-mask";

export default {
  title: "Components / PinInput"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Blurred: Story = {
  render: (args) => <SbBlurred {...args} />
};

export const Customized: Story = {
  render: (args) => <SbCustomized {...args} />
};

export const InitialValue: Story = {
  render: (args) => <SbInitialValue {...args} />
};

export const OTPMode: Story = {
  render: (args) => <SbOTPMode {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const WithAutofocus: Story = {
  render: (args) => <SbWithAutofocus {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};

export const WithMask: Story = {
  render: (args) => <SbWithMask {...args} />
};
