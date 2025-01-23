import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbBlurBehavior from "./blur-behavior.vue";
import SbDisabledEditing from "./disabled-editing.vue";
import SbInitialValue from "./initial-value.vue";
import SbMaxWithOverflow from "./max-with-overflow.vue";
import SbOnEvent from "./on-event.vue";
import SbPasteBehavior from "./paste-behavior.vue";
import SbRootProvider from "./root-provider.vue";
import SbValidated from "./validated.vue";
import SbWithField from "./with-field.vue";

export default {
  title: "Components / TagsInput"
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

export const BlurBehavior: Story = {
  render: (args) => ({
    components: { SbBlurBehavior },
    setup() {
      return { args };
    },
    template: '<sb-blur-behavior :theme="args.theme" />'
  })
};

export const DisabledEditing: Story = {
  render: (args) => ({
    components: { SbDisabledEditing },
    setup() {
      return { args };
    },
    template: '<sb-disabled-editing :theme="args.theme" />'
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

export const MaxWithOverflow: Story = {
  render: (args) => ({
    components: { SbMaxWithOverflow },
    setup() {
      return { args };
    },
    template: '<sb-max-with-overflow :theme="args.theme" />'
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

export const PasteBehavior: Story = {
  render: (args) => ({
    components: { SbPasteBehavior },
    setup() {
      return { args };
    },
    template: '<sb-paste-behavior :theme="args.theme" />'
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

export const Validated: Story = {
  render: (args) => ({
    components: { SbValidated },
    setup() {
      return { args };
    },
    template: '<sb-validated :theme="args.theme" />'
  })
};

export const WithField: Story = {
  render: (args) => ({
    components: { SbWithField },
    setup() {
      return { args };
    },
    template: '<sb-with-field :theme="args.theme" />'
  })
};
