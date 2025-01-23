import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbCustomized from "./customized.vue";
import SbRootProvider from "./root-provider.vue";

export default {
  title: "Components / Pagination"
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

export const Customized: Story = {
  render: (args) => ({
    components: { SbCustomized },
    setup() {
      return { args };
    },
    template: '<sb-customized :theme="args.theme" />'
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
