import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbClosed from "./closed.vue";
import SbEvents from "./events.vue";
import SbRootProvider from "./root-provider.vue";

export default {
  title: "Components / Avatar"
} satisfies Meta;

export const Closed: Story = {
  render: (args) => ({
    components: { SbClosed },
    setup() {
      return { args };
    },
    template:
      '<sb-closed name="Christian" src="https://avatars.githubusercontent.com/u/1846056?v=4" @status-change="(e) => console.log(e.status)" :theme="args.theme" />'
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
