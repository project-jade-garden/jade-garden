import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbAdvanced from "./advanced.vue";
import SbBasic from "./basic.vue";
import SbRootProvider from "./root-provider.vue";
import SbWithField from "./with-field.vue";

export default {
  title: "Components / Combobox"
} satisfies Meta;

export const Advanced: Story = {
  render: (args) => ({
    components: { SbAdvanced },
    setup() {
      return { args };
    },
    template: '<sb-advanced :theme="args.theme" />'
  })
};

export const Basic: Story = {
  render: (args) => ({
    components: { SbBasic },
    setup() {
      return { args };
    },
    template: '<sb-basic :theme="args.theme" />'
  })
};

export const RootProvider: Story = {
  render: (args) => ({
    components: { SbRootProvider },
    setup() {
      return { args };
    },
    template: '<sb-root-provider :theme="args.theme" />'
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
