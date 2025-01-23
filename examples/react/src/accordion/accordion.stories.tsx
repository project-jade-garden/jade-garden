import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Collapsible as SbCollapsible } from "./collapsible";
import { ContextFocusedValue as SbContextFocusedValue } from "./context/focusedValue";
import { ContextGetItemState as SbContextGetItemState } from "./context/getItemState";
import { ContextSetValue as SbContextSetValue } from "./context/setValue";
import { ContextValue as SbContextValue } from "./context/value";
import { Controlled as SbControlled } from "./controlled";
import { Disabled as SbDisabled } from "./disabled";
import { Horizontal as SbHorizontal } from "./horizontal";
import { LazyMount as SbLazyMount } from "./lazy-mount";
import { Multiple as SbMultiple } from "./multiple";
import { Provider as SbProvider } from "./provider";
import { RenderProp as SbRenderProp } from "./render-prop";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Vertical as SbVertical } from "./vertical";
import { WithSlider as SbWithSlider } from "./with-slider";

export default {
  title: "Components / Accordion"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Collapsible: Story = {
  render: (args) => <SbCollapsible {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Disabled: Story = {
  render: (args) => <SbDisabled {...args} />
};

export const Horizontal: Story = {
  render: (args) => <SbHorizontal {...args} />
};

export const LazyMount: Story = {
  render: (args) => <SbLazyMount {...args} />
};

export const Multiple: Story = {
  render: (args) => <SbMultiple {...args} />
};

export const Provider: Story = {
  render: (args) => <SbProvider {...args} />
};

export const RenderProp: Story = {
  render: (args) => <SbRenderProp {...args} />
};

export const Vertical: Story = {
  render: (args) => <SbVertical {...args} />
};

export const WithSlider: Story = {
  render: (args) => <SbWithSlider {...args} />
};

export const ContextFocusedValue: Story = {
  render: (args) => <SbContextFocusedValue {...args} />
};

export const ContextValue: Story = {
  render: (args) => <SbContextValue {...args} />
};

export const ContextSetValue: Story = {
  render: (args) => <SbContextSetValue {...args} />
};

export const ContextGetItemState: Story = {
  render: (args) => <SbContextGetItemState {...args} />
};
