import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbDisabled from "./disabled.vue";
import SbInitialValue from "./initial-value.vue";
import SbOnEvent from "./on-event.vue";
import SbRootProvider from "./root-provider.vue";

export default {
  title: "Components / RadioGroup"
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

export const Disabled: Story = {
  render: (args) => ({
    components: { SbDisabled },
    setup() {
      return { args };
    },
    template: '<sb-disabled :theme="args.theme" />'
  })
};

export const InitialValue: Story = {
  render: (args) => ({
    components: { SbInitialValue },
    setup() {
      return { args };
    },
    template: '<sb-initial-value :theme="args.theme" />'
  })
};

export const OnEvent: Story = {
  render: (args) => ({
    components: { SbOnEvent },
    setup() {
      return { args };
    },
    template: '<sb-on-event :theme="args.theme" />'
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
