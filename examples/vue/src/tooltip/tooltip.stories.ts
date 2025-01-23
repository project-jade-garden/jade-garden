import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbArrow from "./arrow.vue";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbPositioning from "./positioning.vue";
import SbRenderFn from "./render-fn.vue";
import SbRootProvider from "./root-provider.vue";
import SbTimings from "./timings.vue";

export default {
  title: "Components / Tooltip"
} satisfies Meta;

export const Arrow: Story = {
  render: (args) => ({
    components: { SbArrow },
    setup() {
      return { args };
    },
    template: '<sb-arrow :theme="args.theme" />'
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

export const Positioning: Story = {
  render: (args) => ({
    components: { SbPositioning },
    setup() {
      return { args };
    },
    template: '<sb-positioning :theme="args.theme" />'
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

export const Timings: Story = {
  render: (args) => ({
    components: { SbTimings },
    setup() {
      return { args };
    },
    template: '<sb-timings :theme="args.theme" />'
  })
};
