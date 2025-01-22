import { Editable } from "@ark-ui/react/editable";
import { Field } from "@ark-ui/react/field";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const editableStyledSlots = getTheme(
    { minimal: minimal.editableStyledSlots, park: park.editableStyledSlots, shadcn: shadcn.editableStyledSlots },
    props.theme
  );
  const fieldStyledSlots = getTheme(
    { minimal: minimal.fieldStyledSlots, park: park.fieldStyledSlots, shadcn: shadcn.fieldStyledSlots },
    props.theme
  );

  return (
    <Field.Root {...props} className={clsx(fieldStyledSlots.root)}>
      <Editable.Root placeholder="Placeholder" activationMode="dblclick" className={clsx(editableStyledSlots.root)}>
        <Editable.Label className={clsx(editableStyledSlots.label)}>Label</Editable.Label>
        <Editable.Area className={clsx(editableStyledSlots.area)}>
          <Editable.Input className={clsx(editableStyledSlots.input)} />
          <Editable.Preview className={clsx(editableStyledSlots.preview)} />
        </Editable.Area>
      </Editable.Root>
      <Field.HelperText className={clsx(fieldStyledSlots.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(fieldStyledSlots.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
