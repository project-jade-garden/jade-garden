import { Field } from "@ark-ui/react/field";
import { fieldStyledSlots as minimal } from "@spark-css/theme-minimal";
import { fieldStyledSlots as park } from "@spark-css/theme-park";
import { fieldStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RequiredIndicator = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Field.Root required className={clsx(styledSlots.root)}>
      <Field.Label className={clsx(styledSlots.label)}>
        Username
        <Field.RequiredIndicator className={clsx(styledSlots.requiredIndicator)} />
      </Field.Label>
      <Field.Input className={clsx(styledSlots.input)} />
    </Field.Root>
  );
};
