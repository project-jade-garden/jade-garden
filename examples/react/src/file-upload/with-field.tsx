import { Field } from "@ark-ui/react/field";
import { FileUpload } from "@ark-ui/react/file-upload";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const fileUpload = getTheme(
    { minimal: minimal.fileUpload, park: park.fileUpload, shadcn: shadcn.fileUpload },
    props.theme
  );
  const field = getTheme(
    { minimal: minimal.field, park: park.field, shadcn: shadcn.field },
    props.theme
  );

  return (
    <Field.Root {...props} className={clsx(field.root)}>
      <FileUpload.Root maxFiles={5} className={clsx(fileUpload.root)}>
        <FileUpload.Label className={clsx(fileUpload.label)}>Label</FileUpload.Label>
        <FileUpload.Trigger className={clsx(fileUpload.trigger)}>Select</FileUpload.Trigger>
        <FileUpload.ItemGroup className={clsx(fileUpload.itemGroup)} />
        <FileUpload.HiddenInput data-testid="input" />
      </FileUpload.Root>
      <Field.HelperText className={clsx(field.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(field.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
