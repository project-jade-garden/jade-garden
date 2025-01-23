import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { WithAnchor as SbWithAnchor } from "./anchor";
import { Arrow as SbArrow } from "./arrow";
import { Basic as SbBasic } from "./basic";
import { CloseBehavior as SbCloseBehavior } from "./close-behavior";
import { Controlled as SbControlled } from "./controlled";
import { WithDisableOutsideClick as SbWithDisableOutsideClick } from "./disable-outside-click";
import { WithInitialFocusEl as SbWithInitialFocusEl } from "./initial-focus";
import { WithLazyMount as SbWithLazyMount } from "./lazy-mount";
import { Modal as SbModal } from "./modal";
import { WithNestedPopover as SbWithNestedPopover } from "./nested-popover";
import { OnOpenChange as SbOnOpenChange } from "./on-open-change";
import { Portalled as SbPortalled } from "./portalled";
import { Positioning as SbPositioning } from "./positioning";
import { RenderFn as SbRenderFn } from "./render-fn";
import { RootProvider as SbRootProvider } from "./root-provider";
import { WithSameWidth as SbWithSameWidth } from "./same-width";
import { WithDialog as SbWithDialog } from "./with-dialog";

export default {
  title: "Components / Popover"
} satisfies Meta;

export const WithAnchor: Story = {
  render: (args) => <SbWithAnchor {...args} />
};

export const Arrow: Story = {
  render: (args) => <SbArrow {...args} />
};

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const CloseBehavior: Story = {
  render: (args) => <SbCloseBehavior {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const WithDisableOutsideClick: Story = {
  render: (args) => <SbWithDisableOutsideClick {...args} />
};

export const WithInitialFocusEl: Story = {
  render: (args) => <SbWithInitialFocusEl {...args} />
};

export const WithLazyMount: Story = {
  render: (args) => <SbWithLazyMount {...args} />
};

export const Modal: Story = {
  render: (args) => <SbModal {...args} />
};

export const WithNestedPopover: Story = {
  render: (args) => <SbWithNestedPopover {...args} />
};

export const OnOpenChange: Story = {
  render: (args) => <SbOnOpenChange {...args} />
};

export const Portalled: Story = {
  render: (args) => <SbPortalled {...args} />
};

export const Positioning: Story = {
  render: (args) => <SbPositioning {...args} />
};

export const RenderFn: Story = {
  render: (args) => <SbRenderFn {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const WithSameWidth: Story = {
  render: (args) => <SbWithSameWidth {...args} />
};

export const WithDialog: Story = {
  render: (args) => <SbWithDialog {...args} />
};
