import { Editable } from "@ark-ui/react/editable";
import { Field } from "@ark-ui/react/field";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const editable = getTheme({ minimal: minimal.editable, park: park.editable, shadcn: shadcn.editable }, props.theme);
  const field = getTheme({ minimal: minimal.field, park: park.field, shadcn: shadcn.field }, props.theme);

  return (
    <Field.Root {...props} className={clsx(field.root)}>
      <Editable.Root placeholder="Placeholder" activationMode="dblclick" className={clsx(editable.root)}>
        <Editable.Label className={clsx(editable.label)}>Label</Editable.Label>
        <Editable.Area className={clsx(editable.area)}>
          <Editable.Input className={clsx(editable.input)} />
          <Editable.Preview className={clsx(editable.preview)} />
        </Editable.Area>
      </Editable.Root>
      <Field.HelperText className={clsx(field.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(field.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
