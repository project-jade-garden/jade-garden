import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Checkbox as SbCheckbox } from "./checkbox";
import { Context as SbContext } from "./context";
import { Controlled as SbControlled } from "./controlled";
import { Group as SbGroup } from "./group";
import { MultipleMenu as SbMultipleMenu } from "./multiple-menu";
import { Nested as SbNested } from "./nested";
import { RadioGroup as SbRadioGroup } from "./radio-group";
import { RenderProp as SbRenderProp } from "./render-prop";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Separator as SbSeparator } from "./separator";

export default {
  title: "Components / Menu"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Checkbox: Story = {
  render: (args) => <SbCheckbox {...args} />
};

export const Context: Story = {
  render: (args) => <SbContext {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Group: Story = {
  render: (args) => <SbGroup {...args} />
};

export const MultipleMenu: Story = {
  render: (args) => <SbMultipleMenu {...args} />
};

export const Nested: Story = {
  render: (args) => <SbNested {...args} />
};

export const RadioGroup: Story = {
  render: (args) => <SbRadioGroup {...args} />
};

export const RenderProp: Story = {
  render: (args) => <SbRenderProp {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Separator: Story = {
  render: (args) => <SbSeparator {...args} />
};
