import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbCenterOrigin from "./center-origin.vue";
import SbDraggingIndicator from "./dragging-indicator.vue";
import SbInitialValue from "./initial-value.vue";
import SbMinMax from "./min-max.vue";
import SbOnEvent from "./on-event.vue";
import SbRootProvider from "./root-provider.vue";
import SbStep from "./step.vue";
import SbVertical from "./vertical.vue";
import SbWithMarks from "./with-marks.vue";

export default {
  title: "Components / Slider"
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

export const CenterOrigin: Story = {
  render: (args) => ({
    components: { SbCenterOrigin },
    setup() {
      return { args };
    },
    template: '<sb-center-origin :theme="args.theme" />'
  })
};

export const DraggingIndicator: Story = {
  render: (args) => ({
    components: { SbDraggingIndicator },
    setup() {
      return { args };
    },
    template: '<sb-dragging-indicator :theme="args.theme" />'
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

export const MinMax: Story = {
  render: (args) => ({
    components: { SbMinMax },
    setup() {
      return { args };
    },
    template: '<sb-min-max :theme="args.theme" />'
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

export const Step: Story = {
  render: (args) => ({
    components: { SbStep },
    setup() {
      return { args };
    },
    template: '<sb-step :theme="args.theme" />'
  })
};

export const Vertical: Story = {
  render: (args) => ({
    components: { SbVertical },
    setup() {
      return { args };
    },
    template: '<sb-vertical :theme="args.theme" />'
  })
};

export const WithMarks: Story = {
  render: (args) => ({
    components: { SbWithMarks },
    setup() {
      return { args };
    },
    template: '<sb-with-marks :theme="args.theme" />'
  })
};
