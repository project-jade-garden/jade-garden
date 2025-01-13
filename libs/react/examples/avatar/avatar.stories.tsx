import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Context as SbContext } from "./context";
import { Events as SbEvents } from "./events";
import { Provider as SbProvider } from "./provider";
import { RootProvider as SbRootProvider } from "./root-provider";

export default {
  title: "Components / Avatar"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Context: Story = {
  render: (args) => <SbContext {...args} />
};

export const Events: Story = {
  render: (args) => <SbEvents {...args} />
};

export const Provider: Story = {
  render: (args) => <SbProvider {...args} />
};
