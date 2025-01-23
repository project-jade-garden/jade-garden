import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbCheckbox from "./checkbox.vue";
import SbContext from "./context.vue";
import SbControlled from "./controlled.vue";
import SbGroup from "./group.vue";
import SbNested from "./nested.vue";
import SbRadioGroup from "./radio-group.vue";
import SbRenderProp from "./render-prop.vue";
import SbRootProvider from "./root-provider.vue";
import SbSeparator from "./separator.vue";

export default {
  title: "Components / Menu"
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

export const Checkbox: Story = {
  render: (args) => ({
    components: { SbCheckbox },
    setup() {
      return { args };
    },
    template: '<sb-checkbox :theme="args.theme" />'
  })
};

export const Context: Story = {
  render: (args) => ({
    components: { SbContext },
    setup() {
      return { args };
    },
    template: '<sb-context :theme="args.theme" />'
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

export const Group: Story = {
  render: (args) => ({
    components: { SbGroup },
    setup() {
      return { args };
    },
    template: '<sb-group :theme="args.theme" />'
  })
};

export const Nested: Story = {
  render: (args) => ({
    components: { SbNested },
    setup() {
      return { args };
    },
    template: '<sb-nested :theme="args.theme" />'
  })
};

export const RadioGroup: Story = {
  render: (args) => ({
    components: { SbRadioGroup },
    setup() {
      return { args };
    },
    template: '<sb-radio-group :theme="args.theme" />'
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

export const Separator: Story = {
  render: (args) => ({
    components: { SbSeparator },
    setup() {
      return { args };
    },
    template: '<sb-separator :theme="args.theme" />'
  })
};
