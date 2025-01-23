import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Advanced as SbAdvanced } from "./advanced";
import { Basic as SbBasic } from "./basic";
import { RootProvider as SbRootProvider } from "./root-provider";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / Combobox"
} satisfies Meta;

export const Advanced: Story = {
  render: (args) => <SbAdvanced {...args} />
};

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
