import { Field } from "@ark-ui/react/field";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RequiredIndicator = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.field, park: park.field, shadcn: shadcn.field },
    theme
  );

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
