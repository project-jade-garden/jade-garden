import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { WithCheckbox as SbWithCheckbox } from "./with-checkbox";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / Fieldset"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const WithCheckbox: Story = {
  render: (args) => <SbWithCheckbox {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
