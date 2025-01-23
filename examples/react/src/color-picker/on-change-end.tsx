import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";
import { ColorPickerContent } from "./_template";

export const OnChangeEnd = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyledSlots,
      park: park.colorPickerStyledSlots,
      shadcn: shadcn.colorPickerStyledSlots
    },
    theme
  );
  const [color, setColor] = useState(parseColor("rgba(186, 43, 186, 1)"));

  return (
    <ColorPicker.Root
      className={clsx(styledSlots.root)}
      value={color}
      onValueChangeEnd={(details) => setColor(details.value)}
    >
      <ColorPicker.Control className={clsx(styledSlots.control)}>
        <p>Current color value: {color.toString("rgba")}</p>

        <ColorPicker.Trigger className={clsx(styledSlots.trigger)}>
          <ColorPicker.TransparencyGrid className={clsx(styledSlots.transparencyGrid)} />
          <ColorPicker.Context>
            {(colorPicker) => <ColorPicker.Swatch className={clsx(styledSlots.swatch)} value={colorPicker.value} />}
          </ColorPicker.Context>
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <ColorPicker.Positioner className={clsx(styledSlots.positioner)}>
        <ColorPickerContent theme={theme} />
      </ColorPicker.Positioner>

      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
};
