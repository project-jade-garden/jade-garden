import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbInputControlled from "./input-controlled.vue";
import SbInput from "./input.vue";
import SbRequiredIndicator from "./required-indicator.vue";
import SbSelectControlled from "./select-controlled.vue";
import SbSelect from "./select.vue";
import SbTextareaControlled from "./textarea-controlled.vue";
import SbTextarea from "./textarea.vue";

export default {
  title: "Components / Field"
} satisfies Meta;

export const InputControlled: Story = {
  render: (args) => ({
    components: { SbInputControlled },
    setup() {
      return { args };
    },
    template: '<sb-input-controlled :theme="args.theme" />'
  })
};

export const Input: Story = {
  render: (args) => ({
    components: { SbInput },
    setup() {
      return { args };
    },
    template: '<sb-input :theme="args.theme" />'
  })
};

export const RequiredIndicator: Story = {
  render: (args) => ({
    components: { SbRequiredIndicator },
    setup() {
      return { args };
    },
    template: '<sb-required-indicator :theme="args.theme" />'
  })
};

export const SelectControlled: Story = {
  render: (args) => ({
    components: { SbSelectControlled },
    setup() {
      return { args };
    },
    template: '<sb-select-controlled :theme="args.theme" />'
  })
};

export const Select: Story = {
  render: (args) => ({
    components: { SbSelect },
    setup() {
      return { args };
    },
    template: '<sb-select :theme="args.theme" />'
  })
};

export const TextareaControlled: Story = {
  render: (args) => ({
    components: { SbTextareaControlled },
    setup() {
      return { args };
    },
    template: '<sb-textarea-controlled :theme="args.theme" />'
  })
};

export const Textarea: Story = {
  render: (args) => ({
    components: { SbTextarea },
    setup() {
      return { args };
    },
    template: '<sb-textarea :theme="args.theme" />'
  })
};
