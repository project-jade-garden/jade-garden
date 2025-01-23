import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Action as SbAction } from "./action";
import { Basic as SbBasic } from "./basic";
import { Update as SbUpdate } from "./update";

export default {
  title: "Components / Toast"
} satisfies Meta;

export const Action: Story = {
  render: (args) => <SbAction {...args} />
};

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Update: Story = {
  render: (args) => <SbUpdate {...args} />
};
