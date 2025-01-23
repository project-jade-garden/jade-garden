import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbDisabledTab from "./disabled-tab.vue";
import SbIndicator from "./indicator.vue";
import SbInitialTab from "./initial-tab.vue";
import SbLazyMount from "./lazy-mount.vue";
import SbManual from "./manual.vue";
import SbRootProvider from "./root-provider.vue";
import SbVertical from "./vertical.vue";

export default {
  title: "Components / Tabs"
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

export const DisabledTab: Story = {
  render: (args) => ({
    components: { SbDisabledTab },
    setup() {
      return { args };
    },
    template: '<sb-disabled-tab :theme="args.theme" />'
  })
};

export const Indicator: Story = {
  render: (args) => ({
    components: { SbIndicator },
    setup() {
      return { args };
    },
    template: '<sb-indicator :theme="args.theme" />'
  })
};

export const InitialTab: Story = {
  render: (args) => ({
    components: { SbInitialTab },
    setup() {
      return { args };
    },
    template: '<sb-initial-tab :theme="args.theme" />'
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

export const Manual: Story = {
  render: (args) => ({
    components: { SbManual },
    setup() {
      return { args };
    },
    template: '<sb-manual :theme="args.theme" />'
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
