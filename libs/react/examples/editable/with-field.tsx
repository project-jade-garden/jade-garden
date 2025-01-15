import { Editable } from "@ark-ui/react/editable";
import { Field } from "@ark-ui/react/field";
import { editableStyledSlots as editableMinimal, fieldStyledSlots as fieldMinimal } from "@spark-css/theme-minimal";
import { editableStyledSlots as editablePark, fieldStyledSlots as fieldPark } from "@spark-css/theme-park";
import { editableStyledSlots as editableShadcn, fieldStyledSlots as fieldShadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const editableStyledSlots = getTheme(
    { minimal: editableMinimal, park: editablePark, shadcn: editableShadcn },
    props.theme
  );
  const fieldStyledSlots = getTheme({ minimal: fieldMinimal, park: fieldPark, shadcn: fieldShadcn }, props.theme);

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
