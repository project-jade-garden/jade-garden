import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";
import { ColorPickerSlider } from "./_template";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

export const SliderOnly = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyles,
      park: park.colorPickerStyles,
      shadcn: shadcn.colorPickerStyles
    },
    theme
  );

  return (
    <ColorPicker.Root className={clsx(styledSlots.root)} open defaultValue={parseColor("#7f007f")}>
      <ColorPicker.Content className={clsx(styledSlots.content)}>
        <ColorPicker.ValueText className={clsx(styledSlots.valueText)} />
        <ColorPicker.View className={clsx(styledSlots.view)} format="rgba" style={style}>
          <ColorPickerSlider theme={theme} channel="red" />
          <ColorPickerSlider theme={theme} channel="green" />
          <ColorPickerSlider theme={theme} channel="blue" />
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker.Root>
  );
};
