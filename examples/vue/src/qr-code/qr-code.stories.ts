import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbControlled from "./controlled.vue";
import SbErrorCorrection from "./error-correction.vue";
import SbRootProvider from "./root-provider.vue";
import SbWithOverlay from "./with-overlay.vue";

export default {
  title: "Components / QR Code"
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

export const ErrorCorrection: Story = {
  render: (args) => ({
    components: { SbErrorCorrection },
    setup() {
      return { args };
    },
    template: '<sb-error-correction :theme="args.theme" />'
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

export const WithOverlay: Story = {
  render: (args) => ({
    components: { SbWithOverlay },
    setup() {
      return { args };
    },
    template: '<sb-with-overlay :theme="args.theme" />'
  })
};
