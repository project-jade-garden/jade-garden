import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { colorPickerStyledSlots as minimal } from "@spark-css/theme-minimal";
import { colorPickerStyledSlots as park } from "@spark-css/theme-park";
import { colorPickerStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";
import { ColorPickerSwatch } from "./_template";

export const SwatchOnly = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <ColorPicker.Root className={clsx(styledSlots.root)} open defaultValue={parseColor("#eb5e41")}>
      <ColorPicker.Content className={clsx(styledSlots.content)}>
        <div>
          <div>Selected color:</div>
          <ColorPicker.ValueText className={clsx(styledSlots.valueText)} />
        </div>
        <ColorPicker.SwatchGroup className={clsx(styledSlots.swatchGroup)}>
          <ColorPickerSwatch theme={theme} value="red" />
          <ColorPickerSwatch theme={theme} value="pink" />
          <ColorPickerSwatch theme={theme} value="orange" />
          <ColorPickerSwatch theme={theme} value="purple" />
        </ColorPicker.SwatchGroup>
      </ColorPicker.Content>
    </ColorPicker.Root>
  );
};
