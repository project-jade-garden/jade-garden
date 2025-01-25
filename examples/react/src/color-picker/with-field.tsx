import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { Field } from "@ark-ui/react/field";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const colorPicker = getTheme(
    {
      minimal: minimal.colorPicker,
      park: park.colorPicker,
      shadcn: shadcn.colorPicker
    },
    props.theme
  );
  const field = getTheme(
    { minimal: minimal.field, park: park.field, shadcn: shadcn.field },
    props.theme
  );

  return (
    <Field.Root {...props} className={clsx(field.root)}>
      <ColorPicker.Root className={clsx(colorPicker.root)} defaultValue={parseColor("#eb5e41")}>
        <ColorPicker.Label className={clsx(colorPicker.label)}>Label</ColorPicker.Label>
        <ColorPicker.Control className={clsx(colorPicker.control)}>
          <ColorPicker.ChannelInput className={clsx(colorPicker.channelInput)} channel="hex" />
          <ColorPicker.ChannelInput className={clsx(colorPicker.channelInput)} channel="alpha" />
          <ColorPicker.ValueText className={clsx(colorPicker.valueText)} />
          <ColorPicker.Trigger className={clsx(colorPicker.trigger)}>
            <ColorPicker.TransparencyGrid className={clsx(colorPicker.transparencyGrid)} />
            <ColorPicker.ValueSwatch />
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Positioner className={clsx(colorPicker.positioner)}>
          <ColorPicker.Content className={clsx(colorPicker.content)} />
        </ColorPicker.Positioner>
        <ColorPicker.HiddenInput />
      </ColorPicker.Root>
      <Field.HelperText className={clsx(field.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(field.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
