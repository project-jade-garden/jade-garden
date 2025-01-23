import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { CustomControls as SbCustomControls } from "./custom-controls";
import { DoubleClick as SbDoubleClick } from "./double-click";
import { RootProvider as SbRootProvider } from "./root-provider";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / Editable"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const CustomControls: Story = {
  render: (args) => <SbCustomControls {...args} />
};

export const DoubleClick: Story = {
  render: (args) => <SbDoubleClick {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
