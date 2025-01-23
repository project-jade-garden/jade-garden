import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbWithCheckbox from "./with-checkbox.vue";
import SbWithField from "./with-field.vue";

export default {
  title: "Components / Fieldset"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => ({
    components: { SbBasic },
    setup() {
      return { args };
    },
    template: '<sb-basic :theme="args.theme" />'
  })
};

export const WithCheckbox: Story = {
  render: (args) => ({
    components: { SbWithCheckbox },
    setup() {
      return { args };
    },
    template: '<sb-with-checkbox :theme="args.theme" />'
  })
};

export const WithField: Story = {
  render: (args) => ({
    components: { SbWithField },
    setup() {
      return { args };
    },
    template: '<sb-with-field :theme="args.theme" />'
  })
};
