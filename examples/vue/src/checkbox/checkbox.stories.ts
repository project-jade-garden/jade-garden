import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbGroup from "./group.vue";
import SbIndeterminate from "./indeterminate.vue";
import SbRenderProp from "./render-prop.vue";
import SbRootProvider from "./root-provider.vue";
import SbWithField from "./with-field.vue";

export default {
  title: "Components / Checkbox"
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

export const Controlled: Story = {
  render: (args) => ({
    components: { SbControlled },
    setup() {
      return { args };
    },
    template: '<sb-controlled :theme="args.theme" />'
  })
};

export const Group: Story = {
  render: (args) => ({
    components: { SbGroup },
    setup() {
      return { args };
    },
    template: '<sb-group :theme="args.theme" />'
  })
};

export const Indeterminate: Story = {
  render: (args) => ({
    components: { SbIndeterminate },
    setup() {
      return { args };
    },
    template: '<sb-indeterminate :theme="args.theme" />'
  })
};

export const RenderProp: Story = {
  render: (args) => ({
    components: { SbRenderProp },
    setup() {
      return { args };
    },
    template: '<sb-render-prop :theme="args.theme" />'
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
