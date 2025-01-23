import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { Advanced as SbAdvanced } from "./advanced";
import { Basic as SbBasic } from "./basic";
import { Controlled as SbControlled } from "./controlled";
import { FormLibrary as SbFormLibrary } from "./form-library";
import { FormLibraryWithDefaultValue as SbFormLibraryWithDefaultValue } from "./form-library-with-default-value";
import { FullyControlled as SbFullyControlled } from "./fully-controlled";
import { Multiple as SbMultiple } from "./multiple";
import { Overflow as SbOverflow } from "./overflow";
import { ReactiveCollection as SbReactiveCollection } from "./reactive-collection";
import { RootProvider as SbRootProvider } from "./root-provider";
import { SelectAll as SbSelectAll } from "./select-all";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / Select"
} satisfies Meta;

export const Advanced: Story = {
  render: (args) => <SbAdvanced {...args} />
};

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const Controlled: Story = {
  render: (args) => <SbControlled {...args} />
};

export const FormLibrary: Story = {
  render: (args) => <SbFormLibrary {...args} />
};

export const FormLibraryWithDefaultValue: Story = {
  render: (args) => <SbFormLibraryWithDefaultValue {...args} />
};

export const FullyControlled: Story = {
  render: (args) => <SbFullyControlled {...args} />
};

export const Multiple: Story = {
  render: (args) => <SbMultiple {...args} />
};

export const Overflow: Story = {
  render: (args) => <SbOverflow {...args} />
};

export const ReactiveCollection: Story = {
  render: (args) => <SbReactiveCollection {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const SelectAll: Story = {
  render: (args) => <SbSelectAll {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
