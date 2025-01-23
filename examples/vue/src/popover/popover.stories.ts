import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbArrow from "./arrow.vue";
import SbBasic from "./basic.vue";
import SbCloseBehavior from "./close-behavior.vue";
import SbControlled from "./controlled.vue";
import SbModal from "./modal.vue";
import SbOnOpenChange from "./on-open-change.vue";
import SbPortalled from "./portalled.vue";
import SbPositioning from "./positioning.vue";
import SbRenderFn from "./render-fn.vue";
import SbRootProvider from "./root-provider.vue";

export default {
  title: "Components / Popover"
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

export const CloseBehavior: Story = {
  render: (args) => ({
    components: { SbCloseBehavior },
    setup() {
      return { args };
    },
    template: '<sb-close-behavior :theme="args.theme" />'
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

export const Modal: Story = {
  render: (args) => ({
    components: { SbModal },
    setup() {
      return { args };
    },
    template: '<sb-modal :theme="args.theme" />'
  })
};

export const OnOpenChange: Story = {
  render: (args) => ({
    components: { SbOnOpenChange },
    setup() {
      return { args };
    },
    template: '<sb-on-open-change :theme="args.theme" />'
  })
};

export const Portalled: Story = {
  render: (args) => ({
    components: { SbPortalled },
    setup() {
      return { args };
    },
    template: '<sb-portalled :theme="args.theme" />'
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
