import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbFormUsage from "./form-usage.vue";
import SbFormatted from "./formatted.vue";
import SbFractionDigits from "./fraction-digits.vue";
import SbMinMax from "./min-max.vue";
import SbMouseWheel from "./mouse-wheel.vue";
import SbNoClamp from "./no-clamp.vue";
import SbRenderFn from "./render-fn.vue";
import SbRootProvider from "./root-provider.vue";
import SbScrubber from "./scrubber.vue";

export default {
  title: "Components / NumberInput"
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

export const FormUsage: Story = {
  render: (args) => ({
    components: { SbFormUsage },
    setup() {
      return { args };
    },
    template: '<sb-form-usage :theme="args.theme" />'
  })
};

export const Formatted: Story = {
  render: (args) => ({
    components: { SbFormatted },
    setup() {
      return { args };
    },
    template: '<sb-formatted :theme="args.theme" />'
  })
};

export const FractionDigits: Story = {
  render: (args) => ({
    components: { SbFractionDigits },
    setup() {
      return { args };
    },
    template: '<sb-fraction-digits :theme="args.theme" />'
  })
};

export const MinMax: Story = {
  render: (args) => ({
    components: { SbMinMax },
    setup() {
      return { args };
    },
    template: '<sb-min-max :theme="args.theme" />'
  })
};

export const MouseWheel: Story = {
  render: (args) => ({
    components: { SbMouseWheel },
    setup() {
      return { args };
    },
    template: '<sb-mouse-wheel :theme="args.theme" />'
  })
};

export const NoClamp: Story = {
  render: (args) => ({
    components: { SbNoClamp },
    setup() {
      return { args };
    },
    template: '<sb-no-clamp :theme="args.theme" />'
  })
};

export const RenderFn: Story = {
  render: (args) => ({
    components: { SbRenderFn },
    setup() {
      return { args };
    },
    template: '<sb-render-fn :theme="args.theme" />'
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

export const Scrubber: Story = {
  render: (args) => ({
    components: { SbScrubber },
    setup() {
      return { args };
    },
    template: '<sb-scrubber :theme="args.theme" />'
  })
};
