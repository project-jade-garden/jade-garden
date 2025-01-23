import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbDisabled from "./disabled.vue";
import SbFormUsage from "./form-usage.vue";
import SbHalfRatings from "./half-ratings.vue";
import SbInitialValue from "./initial-value.vue";
import SbReadOnly from "./read-only.vue";
import SbRootProvider from "./root-provider.vue";
import SbWithField from "./with-field.vue";

export default {
  title: "Components / RatingGroup"
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

export const Disabled: Story = {
  render: (args) => ({
    components: { SbDisabled },
    setup() {
      return { args };
    },
    template: '<sb-disabled :theme="args.theme" />'
  })
};

export const FormUsage: Story = {
  render: (args) => ({
    components: { SbFormUsage },
    setup() {
      return { args };
    },
    template: '<sb-form-usage :theme="args.theme" />'
  })
};

export const HalfRatings: Story = {
  render: (args) => ({
    components: { SbHalfRatings },
    setup() {
      return { args };
    },
    template: '<sb-half-ratings :theme="args.theme" />'
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

export const ReadOnly: Story = {
  render: (args) => ({
    components: { SbReadOnly },
    setup() {
      return { args };
    },
    template: '<sb-read-only :theme="args.theme" />'
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

export const WithField: Story = {
  render: (args) => ({
    components: { SbWithField },
    setup() {
      return { args };
    },
    template: '<sb-with-field :theme="args.theme" />'
  })
};
