import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { InitialOpen as SbInitialOpen } from "./initial-open";
import { LazyMount as SbLazyMount } from "./lazy-mount";
import { LazyMountAndUnmountOnExit as SbLazyMountAndUnmountOnExit } from "./lazy-mount-and-unmount-on-exit";
import { OnExitComplete as SbOnExitComplete } from "./on-exit-complete";
import { RootProvider as SbRootProvider } from "./root-provider";
import { UnmountOnExit as SbUnmountOnExit } from "./unmount-on-exit";

export default {
  title: "Components / Collapsible"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const InitialOpen: Story = {
  render: (args) => <SbInitialOpen {...args} />
};

export const LazyMount: Story = {
  render: (args) => <SbLazyMount {...args} />
};

export const LazyMountAndUnmountOnExit: Story = {
  render: (args) => <SbLazyMountAndUnmountOnExit {...args} />
};

export const OnExitComplete: Story = {
  render: (args) => <SbOnExitComplete {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const UnmountOnExit: Story = {
  render: (args) => <SbUnmountOnExit {...args} />
};
