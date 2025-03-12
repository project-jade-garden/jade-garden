import type { Meta } from "@storybook/vue3";
import type { StoryObj } from "@storybook/vue3";
import SbInputControlled from "./input-controlled.vue";
import SbInput from "./input.vue";
import SbRequiredIndicator from "./required-indicator.vue";
import SbSelectControlled from "./select-controlled.vue";
import SbSelect from "./select.vue";
import SbTextareaControlled from "./textarea-controlled.vue";
import SbTextarea from "./textarea.vue";

type Story = StoryObj;

export default {
  title: "Ark UI / Field"
} satisfies Meta;

export const InputControlled: Story = {
  render: () => ({
    components: { SbInputControlled }
  })
};

export const Input: Story = {
  render: () => ({
    components: { SbInput }
  })
};

export const RequiredIndicator: Story = {
  render: () => ({
    components: { SbRequiredIndicator }
  })
};

export const SelectControlled: Story = {
  render: () => ({
    components: { SbSelectControlled }
  })
};

export const Select: Story = {
  render: () => ({
    components: { SbSelect }
  })
};

export const TextareaControlled: Story = {
  render: () => ({
    components: { SbTextareaControlled }
  })
};

export const Textarea: Story = {
  render: () => ({
    components: { SbTextarea }
  })
};
