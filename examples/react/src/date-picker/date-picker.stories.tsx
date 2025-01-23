import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Range as SbRange } from "./range";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Standalone as SbStandalone } from "./standalone";

export default {
  title: "Components / Date Picker"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Range: Story = {
  render: (args) => <SbRange {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Standalone: Story = {
  render: (args) => <SbStandalone {...args} />
};
