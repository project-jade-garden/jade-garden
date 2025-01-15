import { Field } from "@ark-ui/react/field";
import { fieldStyledSlots as minimal } from "@spark-css/theme-minimal";
import { fieldStyledSlots as park } from "@spark-css/theme-park";
import { fieldStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Textarea = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Field.Root className={clsx(styledSlots.root)}>
      <Field.Label className={clsx(styledSlots.label)}>Label</Field.Label>
      <Field.Textarea autoresize className={clsx(styledSlots.textarea)} />
      <Field.HelperText className={clsx(styledSlots.helperText)}>Some additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(styledSlots.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
