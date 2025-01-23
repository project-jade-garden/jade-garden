import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbLazyMount from "./lazy-mount.vue";
import SbRenderFn from "./render-fn.vue";
import SbRootProvider from "./root-provider.vue";

export default {
  title: "Components / Dialog"
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

export const LazyMount: Story = {
  render: (args) => ({
    components: { SbLazyMount },
    setup() {
      return { args };
    },
    template: '<sb-lazy-mount :theme="args.theme" />'
  })
};

export const RenderFn: Story = {
  render: (args) => ({
    components: { SbRenderFn },
    setup() {
      return { args };
    },
    template: '<sb-render-fn :theme="args.theme" />'
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
