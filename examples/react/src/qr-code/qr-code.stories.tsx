import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { ErrorCorrection as SbErrorCorrection } from "./error-correction";
import { RootProvider as SbRootProvider } from "./root-provider";
import { WithOverlay as SbWithOverlay } from "./with-overlay";

export default {
  title: "Components / QR Code"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const ErrorCorrection: Story = {
  render: (args) => <SbErrorCorrection {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const WithOverlay: Story = {
  render: (args) => <SbWithOverlay {...args} />
};
