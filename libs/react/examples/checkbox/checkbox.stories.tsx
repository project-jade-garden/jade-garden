import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { Group as SbGroup } from "./group";
import { GroupWithForm as SbGroupWithForm } from "./group-with-form";
import { GroupWithInvalid as SbGroupWithInvalid } from "./group-with-invalid";
import { Indeterminate as SbIndeterminate } from "./indeterminate";
import { RenderProp as SbRenderProp } from "./render-prop";
import { RootProvider as SbRootProvider } from "./root-provider";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / Checkbox"
} satisfies Meta;

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const Group: Story = {
  render: (args) => <SbGroup {...args} />
};

export const GroupWithForm: Story = {
  render: (args) => <SbGroupWithForm {...args} />
};

export const GroupWithInvalid: Story = {
  render: (args) => <SbGroupWithInvalid {...args} />
};

export const Indeterminate: Story = {
  render: (args) => <SbIndeterminate {...args} />
};

export const RenderProp: Story = {
  render: (args) => <SbRenderProp {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
