import { Field } from "@ark-ui/react/field";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Textarea = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.fieldStyles, park: park.fieldStyles, shadcn: shadcn.fieldStyles },
    theme
  );

  return (
    <Field.Root className={clsx(styledSlots.root)}>
      <Field.Label className={clsx(styledSlots.label)}>Label</Field.Label>
      <Field.Textarea autoresize className={clsx(styledSlots.textarea)} />
      <Field.HelperText className={clsx(styledSlots.helperText)}>Some additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(styledSlots.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
