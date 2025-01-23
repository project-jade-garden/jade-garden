import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Inline as SbInline } from "./inline";
import { OnChangeEnd as SbOnChangeEnd } from "./on-change-end";
import { RootProvider as SbRootProvider } from "./root-provider";
import { SliderOnly as SbSliderOnly } from "./slider-only";
import { SwatchOnly as SbSwatchOnly } from "./swatch-only";
import { WithField as SbWithField } from "./with-field";
import { WithFormRegister as SbWithFormRegister } from "./with-form-register";

export default {
  title: "Components / Color Picker"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Inline: Story = {
  render: (args) => <SbInline {...args} />
};

export const OnChangeEnd: Story = {
  render: (args) => <SbOnChangeEnd {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const SliderOnly: Story = {
  render: (args) => <SbSliderOnly {...args} />
};

export const SwatchOnly: Story = {
  render: (args) => <SbSwatchOnly {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};

export const WithFormRegister: Story = {
  render: (args) => <SbWithFormRegister {...args} />
};
