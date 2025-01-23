import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbAccordion from "./accordion.vue";
import SbBasic from "./basic.vue";
import SbCollapsible from "./collapsible.vue";
import SbContextFocusedValue from "./context/focusedValue.vue";
import SbContextGetItemState from "./context/getItemState.vue";
import SbContextSetValue from "./context/setValue.vue";
import SbContextValue from "./context/value.vue";
import SbControlled from "./controlled.vue";
import SbDisabled from "./disabled.vue";
import SbHorizontal from "./horizontal.vue";
import SbMultiple from "./multiple.vue";
import SbRenderProp from "./render-prop.vue";
import SbRootProvider from "./root-provider.vue";
import SbVertical from "./vertical.vue";

export default {
  title: "Components / Accordion"
} satisfies Meta;

export const Accordion: Story = {
  render: (args) => ({
    components: { SbAccordion },
    setup() {
      return { args };
    },
    template: "<sb-accordion multiple :items=\"['React', 'Solid', 'Vue']\" :theme=\"args.theme\" />"
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

export const Collapsible: Story = {
  render: (args) => ({
    components: { SbCollapsible },
    setup() {
      return { args };
    },
    template: '<sb-collapsible :theme="args.theme" />'
  })
};

export const ContextFocusedValue: Story = {
  render: (args) => ({
    components: { SbContextFocusedValue },
    setup() {
      return { args };
    },
    template: '<sb-context-focused-value :theme="args.theme" />'
  })
};

export const ContextGetItemState: Story = {
  render: (args) => ({
    components: { SbContextGetItemState },
    setup() {
      return { args };
    },
    template: '<sb-context-get-item-state :theme="args.theme" />'
  })
};

export const ContextSetValue: Story = {
  render: (args) => ({
    components: { SbContextSetValue },
    setup() {
      return { args };
    },
    template: '<sb-context-set-value :theme="args.theme" />'
  })
};

export const ContextValue: Story = {
  render: (args) => ({
    components: { SbContextValue },
    setup() {
      return { args };
    },
    template: '<sb-context-value :theme="args.theme" />'
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

export const Horizontal: Story = {
  render: (args) => ({
    components: { SbHorizontal },
    setup() {
      return { args };
    },
    template: '<sb-horizontal :theme="args.theme" />'
  })
};

export const Multiple: Story = {
  render: (args) => ({
    components: { SbMultiple },
    setup() {
      return { args };
    },
    template: '<sb-multiple :theme="args.theme" />'
  })
};

export const RenderProp: Story = {
  render: (args) => ({
    components: { SbRenderProp },
    setup() {
      return { args };
    },
    template: '<sb-render-prop :theme="args.theme" />'
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

export const Vertical: Story = {
  render: (args) => ({
    components: { SbVertical },
    setup() {
      return { args };
    },
    template: '<sb-vertical :theme="args.theme" />'
  })
};
