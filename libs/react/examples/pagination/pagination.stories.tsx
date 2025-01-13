import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Customized as SbCustomized } from "./customized";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Pagination"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Customized: Story = {
  render: (args) => <SbCustomized {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
