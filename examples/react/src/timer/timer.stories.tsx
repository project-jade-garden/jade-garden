import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Countdown as SbCountdown } from "./countdown";
import { CustomInterval as SbCustomInterval } from "./custom-interval";
import { Events as SbEvents } from "./events";
import { Pomodoro as SbPomodoro } from "./pomodoro";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Timer"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Countdown: Story = {
  render: (args) => <SbCountdown {...args} />
};

export const CustomInterval: Story = {
  render: (args) => <SbCustomInterval {...args} />
};

export const Events: Story = {
  render: (args) => <SbEvents {...args} />
};

export const Pomodoro: Story = {
  render: (args) => <SbPomodoro {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};
