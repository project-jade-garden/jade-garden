import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyledSlots,
      park: park.colorPickerStyledSlots,
      shadcn: shadcn.colorPickerStyledSlots
    },
    theme
  );
  const [color, setColor] = useState(() => parseColor("hsl(20, 100%, 50%)"));

  return (
    <ColorPicker.Root
      className={clsx(styledSlots.root)}
      format="hsla"
      value={color}
      onValueChange={(e) => setColor(e.value)}
    >
      <ColorPicker.Label className={clsx(styledSlots.label)}>Color</ColorPicker.Label>
      <ColorPicker.Control className={clsx(styledSlots.control)}>
        <ColorPicker.ChannelInput className={clsx(styledSlots.channelInput)} channel="hex" />
        <ColorPicker.ChannelInput className={clsx(styledSlots.channelInput)} channel="alpha" />
        <ColorPicker.ValueText className={clsx(styledSlots.valueText)} />
        <ColorPicker.Trigger className={clsx(styledSlots.trigger)}>
          <ColorPicker.TransparencyGrid className={clsx(styledSlots.transparencyGrid)} />
          <ColorPicker.ValueSwatch />
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Positioner className={clsx(styledSlots.positioner)}>
        <ColorPicker.Content className={clsx(styledSlots.content)}>
          <ColorPicker.Area className={clsx(styledSlots.area)}>
            <ColorPicker.AreaBackground className={clsx(styledSlots.areaBackground)} />
            <ColorPicker.AreaThumb className={clsx(styledSlots.areaThumb)} />
          </ColorPicker.Area>
          <ColorPicker.ChannelSlider className={clsx(styledSlots.channelSlider)} channel="hue">
            <ColorPicker.ChannelSliderTrack className={clsx(styledSlots.channelSliderTrack)} />
            <ColorPicker.ChannelSliderThumb className={clsx(styledSlots.channelSliderThumb)} />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider className={clsx(styledSlots.channelSlider)} channel="alpha">
            <ColorPicker.TransparencyGrid className={clsx(styledSlots.transparencyGrid)} />
            <ColorPicker.ChannelSliderTrack className={clsx(styledSlots.channelSliderTrack)} />
            <ColorPicker.ChannelSliderThumb className={clsx(styledSlots.channelSliderThumb)} />
          </ColorPicker.ChannelSlider>
          <ColorPicker.SwatchGroup className={clsx(styledSlots.swatchGroup)}>
            <ColorPicker.SwatchTrigger className={clsx(styledSlots.swatchTrigger)} value="red">
              <ColorPicker.Swatch className={clsx(styledSlots.swatch)} value="red">
                <ColorPicker.SwatchIndicator className={clsx(styledSlots.swatchIndicator)}>
                  ✓
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger className={clsx(styledSlots.swatchTrigger)} value="blue">
              <ColorPicker.Swatch className={clsx(styledSlots.swatch)} value="blue">
                <ColorPicker.SwatchIndicator className={clsx(styledSlots.swatchIndicator)}>
                  ✓
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger className={clsx(styledSlots.swatchTrigger)} value="green">
              <ColorPicker.Swatch className={clsx(styledSlots.swatch)} value="green">
                <ColorPicker.SwatchIndicator className={clsx(styledSlots.swatchIndicator)}>
                  ✓
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
          <ColorPicker.View className={clsx(styledSlots.view)} format="rgba">
            <ColorPicker.ChannelInput className={clsx(styledSlots.channelInput)} channel="hex" />
            <ColorPicker.ChannelInput className={clsx(styledSlots.channelInput)} channel="alpha" />
          </ColorPicker.View>
          <ColorPicker.View className={clsx(styledSlots.view)} format="hsla">
            <ColorPicker.ChannelInput className={clsx(styledSlots.channelInput)} channel="hue" />
            <ColorPicker.ChannelInput className={clsx(styledSlots.channelInput)} channel="saturation" />
            <ColorPicker.ChannelInput className={clsx(styledSlots.channelInput)} channel="lightness" />
          </ColorPicker.View>
          <ColorPicker.EyeDropperTrigger className={clsx(styledSlots.eyeDropperTrigger)}>
            Pick color
          </ColorPicker.EyeDropperTrigger>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
};
