import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Autoplay as SbAutoplay } from "./autoplay";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Carousel"
} satisfies Meta;

export const Autoplay: Story = {
  render: (args) => <SbAutoplay {...args} />
};

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
