import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { InitialValue as SbInitialValue } from "./initial-value";
import { Multiple as SbMultiple } from "./multiple";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Toggle Group"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const InitialValue: Story = {
  render: (args) => <SbInitialValue {...args} />
};

export const Multiple: Story = {
  render: (args) => <SbMultiple {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
