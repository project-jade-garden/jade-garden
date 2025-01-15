import { Field } from "@ark-ui/react/field";
import { FileUpload } from "@ark-ui/react/file-upload";
import { fieldStyledSlots as fieldMinimal, fileUploadStyledSlots as fileUploadMinimal } from "@spark-css/theme-minimal";
import { fieldStyledSlots as fieldPark, fileUploadStyledSlots as fileUploadPark } from "@spark-css/theme-park";
import { fieldStyledSlots as fieldShadcn, fileUploadStyledSlots as fileUploadShadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const fieldStyledSlots = getTheme({ minimal: fieldMinimal, park: fieldPark, shadcn: fieldShadcn }, props.theme);
  const fileUploadStyledSlots = getTheme(
    { minimal: fileUploadMinimal, park: fileUploadPark, shadcn: fileUploadShadcn },
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
