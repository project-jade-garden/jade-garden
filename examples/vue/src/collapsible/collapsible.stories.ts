import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbLazyMountAndUnmountOnExit from "./lazy-mount-and-unmount-on-exit.vue";
import SbLazyMount from "./lazy-mount.vue";
import SbOnExitComplete from "./on-exit-complete.vue";
import SbRootProvider from "./root-provider.vue";
import SbUnmountOnExit from "./unmount-on-exit.vue";

export default {
  title: "Components / Collapsible"
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

export const LazyMountAndUnmountOnExit: Story = {
  render: (args) => ({
    components: { SbLazyMountAndUnmountOnExit },
    setup() {
      return { args };
    },
    template: '<sb-lazy-mount-and-unmount-on-exit :theme="args.theme" />'
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

export const OnExitComplete: Story = {
  render: (args) => ({
    components: { SbOnExitComplete },
    setup() {
      return { args };
    },
    template: '<sb-on-exit-complete :theme="args.theme" />'
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

export const UnmountOnExit: Story = {
  render: (args) => ({
    components: { SbUnmountOnExit },
    setup() {
      return { args };
    },
    template: '<sb-unmount-on-exit :theme="args.theme" />'
  })
};
