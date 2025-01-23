import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbCountdown from "./countdown.vue";
import SbEvents from "./events.vue";
import SbRootProvider from "./root-provider.vue";

export default {
  title: "Components / Timer"
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

export const Countdown: Story = {
  render: (args) => ({
    components: { SbCountdown },
    setup() {
      return { args };
    },
    template: '<sb-countdown :theme="args.theme" />'
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

export const RootProvider: Story = {
  render: (args) => ({
    components: { SbRootProvider },
    setup() {
      return { args };
    },
    template: '<sb-root-provider :theme="args.theme" />'
  })
};
