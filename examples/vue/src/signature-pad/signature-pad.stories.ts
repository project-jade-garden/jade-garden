import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";
import SbImagePreview from "./image-preview.vue";
import SbRootProvider from "./root-provider.vue";
import SbWithField from "./with-field.vue";

export default {
  title: "Components / Signature Pad"
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

export const ImagePreview: Story = {
  render: (args) => ({
    components: { SbImagePreview },
    setup() {
      return { args };
    },
    template: '<sb-image-preview :theme="args.theme" />'
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
