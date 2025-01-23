import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbCustomControls from "./custom-controls.vue";
import SbRootProvider from "./root-provider.vue";

export default {
  title: "Components / Editable"
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

export const CustomControls: Story = {
  render: (args) => ({
    components: { SbCustomControls },
    setup() {
      return { args };
    },
    template: '<sb-custom-controls :theme="args.theme" />'
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
