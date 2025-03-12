import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { Input as SbInput } from "./input";
import { RequiredIndicator as SbRequiredIndicator } from "./required-indicator";
import { Select as SbSelect } from "./select";
import { Textarea as SbTextarea } from "./textarea";

type Story = StoryObj;

export default {
  title: "Ark UI / Field"
} satisfies Meta;

export const Input: Story = {
  render: (args) => <SbInput {...args} />
};

export const RequiredIndicator: Story = {
  render: (args) => <SbRequiredIndicator {...args} />
};

export const Select: Story = {
  render: (args) => <SbSelect {...args} />
};

export const Textarea: Story = {
  render: (args) => <SbTextarea {...args} />
};
