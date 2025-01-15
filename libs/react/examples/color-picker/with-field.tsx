import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { Field } from "@ark-ui/react/field";
import {
  colorPickerStyledSlots as colorPickerMinimal,
  fieldStyledSlots as fieldMinimal
} from "@spark-css/theme-minimal";
import { colorPickerStyledSlots as colorPickerPark, fieldStyledSlots as fieldPark } from "@spark-css/theme-park";
import { colorPickerStyledSlots as colorPickerShadcn, fieldStyledSlots as fieldShadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const colorPickerStyledSlots = getTheme(
    { minimal: colorPickerMinimal, park: colorPickerPark, shadcn: colorPickerShadcn },
    props.theme
  );
  const fieldStyledSlots = getTheme({ minimal: fieldMinimal, park: fieldPark, shadcn: fieldShadcn }, props.theme);

  return (
    <Field.Root {...props} className={clsx(fieldStyledSlots.root)}>
      <ColorPicker.Root className={clsx(colorPickerStyledSlots.root)} defaultValue={parseColor("#eb5e41")}>
        <ColorPicker.Label className={clsx(colorPickerStyledSlots.label)}>Label</ColorPicker.Label>
        <ColorPicker.Control className={clsx(colorPickerStyledSlots.control)}>
          <ColorPicker.ChannelInput className={clsx(colorPickerStyledSlots.channelInput)} channel="hex" />
          <ColorPicker.ChannelInput className={clsx(colorPickerStyledSlots.channelInput)} channel="alpha" />
          <ColorPicker.ValueText className={clsx(colorPickerStyledSlots.valueText)} />
          <ColorPicker.Trigger className={clsx(colorPickerStyledSlots.trigger)}>
            <ColorPicker.TransparencyGrid className={clsx(colorPickerStyledSlots.transparencyGrid)} />
            <ColorPicker.ValueSwatch />
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Positioner className={clsx(colorPickerStyledSlots.positioner)}>
          <ColorPicker.Content className={clsx(colorPickerStyledSlots.content)} />
        </ColorPicker.Positioner>
        <ColorPicker.HiddenInput />
      </ColorPicker.Root>
      <Field.HelperText className={clsx(fieldStyledSlots.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(fieldStyledSlots.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
