import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { DisabledTab as SbDisabledTab } from "./disabled-tab";
import { Indicator as SbIndicator } from "./indicator";
import { InitialTab as SbInitialTab } from "./initial-tab";
import { LazyMount as SbLazyMount } from "./lazy-mount";
import { WithLinkTrigger as SbWithLinkTrigger } from "./link-trigger";
import { Manual as SbManual } from "./manual";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Vertical as SbVertical } from "./vertical";

export default {
  title: "Components / Tabs"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const DisabledTab: Story = {
  render: (args) => <SbDisabledTab {...args} />
};

export const Indicator: Story = {
  render: (args) => <SbIndicator {...args} />
};

export const InitialTab: Story = {
  render: (args) => <SbInitialTab {...args} />
};

export const LazyMount: Story = {
  render: (args) => <SbLazyMount {...args} />
};

export const WithLinkTrigger: Story = {
  render: (args) => <SbWithLinkTrigger {...args} />
};

export const Manual: Story = {
  render: (args) => <SbManual {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Vertical: Story = {
  render: (args) => <SbVertical {...args} />
};
