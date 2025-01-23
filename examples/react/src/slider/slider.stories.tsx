import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { CenterOrigin as SbCenterOrigin } from "./center-origin";
import { DraggingIndicator as SbDraggingIndicator } from "./dragging-indicator";
import { InitialValue as SbInitialValue } from "./initial-value";
import { MinMax as SbMinMax } from "./min-max";
import { OnEvent as SbOnEvent } from "./on-event";
import { Range as SbRange } from "./range";
import { RootProvider as SbRootProvider } from "./root-provider";
import { Step as SbStep } from "./step";
import { ThumbOverlap as SbThumbOverlap } from "./thumb-overlap";
import { Vertical as SbVertical } from "./vertical";
import { WithMarks as SbWithMarks } from "./with-marks";

export default {
  title: "Components / Slider"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const CenterOrigin: Story = {
  render: (args) => <SbCenterOrigin {...args} />
};

export const DraggingIndicator: Story = {
  render: (args) => <SbDraggingIndicator {...args} />
};

export const InitialValue: Story = {
  render: (args) => <SbInitialValue {...args} />
};

export const MinMax: Story = {
  render: (args) => <SbMinMax {...args} />
};

export const OnEvent: Story = {
  render: (args) => <SbOnEvent {...args} />
};

export const Range: Story = {
  render: (args) => <SbRange {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const Step: Story = {
  render: (args) => <SbStep {...args} />
};

export const ThumbOverlap: Story = {
  render: (args) => <SbThumbOverlap {...args} />
};

export const Vertical: Story = {
  render: (args) => <SbVertical {...args} />
};

export const WithMarks: Story = {
  render: (args) => <SbWithMarks {...args} />
};
