import { Field } from "@ark-ui/react/field";
import { FileUpload } from "@ark-ui/react/file-upload";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const fileUploadStyledSlots = getTheme(
    { minimal: minimal.fileUploadStyledSlots, park: park.fileUploadStyledSlots, shadcn: shadcn.fileUploadStyledSlots },
    props.theme
  );
  const fieldStyledSlots = getTheme(
    { minimal: minimal.fieldStyledSlots, park: park.fieldStyledSlots, shadcn: shadcn.fieldStyledSlots },
    props.theme
  );

  return (
    <Field.Root {...props} className={clsx(fieldStyledSlots.root)}>
      <FileUpload.Root maxFiles={5} className={clsx(fileUploadStyledSlots.root)}>
        <FileUpload.Label className={clsx(fileUploadStyledSlots.label)}>Label</FileUpload.Label>
        <FileUpload.Trigger className={clsx(fileUploadStyledSlots.trigger)}>Select</FileUpload.Trigger>
        <FileUpload.ItemGroup className={clsx(fileUploadStyledSlots.itemGroup)} />
        <FileUpload.HiddenInput data-testid="input" />
      </FileUpload.Root>
      <Field.HelperText className={clsx(fieldStyledSlots.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(fieldStyledSlots.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
