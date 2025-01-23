import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbEvents from "./events.vue";
import SbRenderProp from "./render-prop.vue";
import SbRootProvider from "./root-provider.vue";
import SbVertical from "./vertical.vue";

export default {
  title: "Components / Splitter"
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

export const Events: Story = {
  render: (args) => ({
    components: { SbEvents },
    setup() {
      return { args };
    },
    template: '<sb-events :theme="args.theme" />'
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

export const Vertical: Story = {
  render: (args) => ({
    components: { SbVertical },
    setup() {
      return { args };
    },
    template: '<sb-vertical :theme="args.theme" />'
  })
};
