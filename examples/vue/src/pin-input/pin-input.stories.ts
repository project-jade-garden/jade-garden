import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbBlurred from "./blurred.vue";
import SbCustomized from "./customized.vue";
import SbInitialValue from "./initial-value.vue";
import SbOTPMode from "./otp-mode.vue";
import SbRootProvider from "./root-provider.vue";
import SbWithField from "./with-field.vue";
import SbWithMask from "./with-mask.vue";

export default {
  title: "Components / PinInput"
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

export const Blurred: Story = {
  render: (args) => ({
    components: { SbBlurred },
    setup() {
      return { args };
    },
    template: '<sb-blurred :theme="args.theme" />'
  })
};

export const Customized: Story = {
  render: (args) => ({
    components: { SbCustomized },
    setup() {
      return { args };
    },
    template: '<sb-customized :theme="args.theme" />'
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

export const OTPMode: Story = {
  render: (args) => ({
    components: { SbOTPMode },
    setup() {
      return { args };
    },
    template: '<sb-o-t-p-mode :theme="args.theme" />'
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

export const WithMask: Story = {
  render: (args) => ({
    components: { SbWithMask },
    setup() {
      return { args };
    },
    template: '<sb-with-mask :theme="args.theme" />'
  })
};
