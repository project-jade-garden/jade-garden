import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbAutoplay from "./autoplay.vue";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbRootProvider from "./root-provider.vue";

export default {
  title: "Components / Carousel"
} satisfies Meta;

export const Autoplay: Story = {
  render: (args) => ({
    components: { SbAutoplay },
    setup() {
      return { args };
    },
    template: '<sb-autoplay :theme="args.theme" />'
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

export const RootProvider: Story = {
  render: (args) => ({
    components: { SbRootProvider },
    setup() {
      return { args };
    },
    template: '<sb-root-provider :theme="args.theme" />'
  })
};
