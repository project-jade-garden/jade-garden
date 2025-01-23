import type { Meta } from "@storybook/react";
import type { Story } from "../utils";
import { WithAcceptedFileTypes as SbWithAcceptedFileTypes } from "./accepted-file-types";
import { Basic as SbBasic } from "./basic";
import { WithClearTrigger as SbWithClearTrigger } from "./clear-trigger";
import { WithDirectoryUpload as SbWithDirectoryUpload } from "./directory-upload";
import { WithFormRegister as SbWithFormRegister } from "./form-register";
import { WithFormSetValue as SbWithFormSetValue } from "./form-set-value";
import { WithMediaCapture as SbWithMediaCapture } from "./media-capture";
import { RootProvider as SbRootProvider } from "./root-provider";
import { WithField as SbWithField } from "./with-field";

export default {
  title: "Components / File Upload"
} satisfies Meta;

export const WithAcceptedFileTypes: Story = {
  render: (args) => <SbWithAcceptedFileTypes {...args} />
};

export const Basic: Story = {
  render: (args) => <SbBasic {...args} />
};

export const WithClearTrigger: Story = {
  render: (args) => <SbWithClearTrigger {...args} />
};

export const WithDirectoryUpload: Story = {
  render: (args) => <SbWithDirectoryUpload {...args} />
};

export const WithFormRegister: Story = {
  render: (args) => <SbWithFormRegister {...args} />
};

export const WithFormSetValue: Story = {
  render: (args) => <SbWithFormSetValue {...args} />
};

export const WithMediaCapture: Story = {
  render: (args) => <SbWithMediaCapture {...args} />
};

export const RootProvider: Story = {
  render: (args) => <SbRootProvider {...args} />
};

export const WithField: Story = {
  render: (args) => <SbWithField {...args} />
};
