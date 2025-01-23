import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbRange from "./range.vue";
import SbRootProvider from "./root-provider.vue";
import SbStandalone from "./standalone.vue";

export default {
  title: "Components / DatePicker"
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

export const Range: Story = {
  render: (args) => ({
    components: { SbRange },
    setup() {
      return { args };
    },
    template: '<sb-range :theme="args.theme" />'
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

export const Standalone: Story = {
  render: (args) => ({
    components: { SbStandalone },
    setup() {
      return { args };
    },
    template: '<sb-standalone :theme="args.theme" />'
  })
};
