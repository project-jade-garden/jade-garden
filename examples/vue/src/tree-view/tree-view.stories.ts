import type { Meta } from "@storybook/vue3";
import type { Story } from "../utils";
import SbBasic from "./basic.vue";

export default {
  title: "Components / TreeView"
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
