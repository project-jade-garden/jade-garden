import type { Meta } from "@storybook/react";
import type { Story } from "../../utils";
import { RootProvider as SbRootProvider } from "../circular/root-provider";
import { Basic as SbBasic } from "./basic";
import { Indeterminate as SbIndeterminate } from "./indeterminate";
import { InitialValue as SbInitialValue } from "./initial-value";
import { MinMax as SbMinMax } from "./min-max";
import { ValueText as SbValueText } from "./value-text";

export default {
  title: "Components / Progress / Linear"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Indeterminate: Story = {
  render: (args) => <SbIndeterminate {...args} />
};

export const InitialValue: Story = {
  render: (args) => <SbInitialValue {...args} />
};

export const MinMax: Story = {
  render: (args) => <SbMinMax {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const ValueText: Story = {
  render: (args) => <SbValueText {...args} />
};
