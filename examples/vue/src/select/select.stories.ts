import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbAdvanced from "./advanced.vue";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbMultiple from "./multiple.vue";
import SbReactiveCollection from "./reactive-collection.vue";
import SbRootProvider from "./root-provider.vue";
import SbWithField from "./with-field.vue";

export default {
  title: "Components / Select"
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

export const Controlled: Story = {
  render: (args) => ({
    components: { SbControlled },
    setup() {
      return { args };
    },
    template: '<sb-controlled :theme="args.theme" />'
  })
};

export const Multiple: Story = {
  render: (args) => ({
    components: { SbMultiple },
    setup() {
      return { args };
    },
    template: '<sb-multiple :theme="args.theme" />'
  })
};

export const ReactiveCollection: Story = {
  render: (args) => ({
    components: { SbReactiveCollection },
    setup() {
      return { args };
    },
    template: '<sb-reactive-collection :theme="args.theme" />'
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
