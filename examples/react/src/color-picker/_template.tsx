import { ColorPicker } from "@ark-ui/react/color-picker";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const ColorPickerContent = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyles,
      park: park.colorPickerStyles,
      shadcn: shadcn.colorPickerStyles
    },
    theme
  );

  return (
    <ColorPicker.Content className={clsx(styledSlots.content)}>
      <ColorPicker.Area className={clsx(styledSlots.area)}>
        <ColorPicker.AreaBackground className={clsx(styledSlots.areaBackground)} />
        <ColorPicker.AreaThumb className={clsx(styledSlots.areaThumb)} />
      </ColorPicker.Area>

      <ColorPicker.ChannelSlider channel="hue" className={clsx(styledSlots.channelSlider)}>
        <ColorPicker.ChannelSliderTrack className={clsx(styledSlots.channelSliderTrack)} />
        <ColorPicker.ChannelSliderThumb className={clsx(styledSlots.channelSliderThumb)} />
      </ColorPicker.ChannelSlider>

      <ColorPicker.ChannelSlider channel="alpha" className={clsx(styledSlots.channelSlider)}>
        <ColorPicker.TransparencyGrid className={clsx(styledSlots.transparencyGrid)} />
        <ColorPicker.ChannelSliderTrack className={clsx(styledSlots.channelSliderTrack)} />
        <ColorPicker.ChannelSliderThumb className={clsx(styledSlots.channelSliderThumb)} />
      </ColorPicker.ChannelSlider>

      <ColorPicker.SwatchGroup className={clsx(styledSlots.swatchGroup)}>
        <ColorPicker.SwatchTrigger value="red" className={clsx(styledSlots.swatchTrigger)}>
          <ColorPicker.Swatch value="red" className={clsx(styledSlots.swatch)}>
            <ColorPicker.SwatchIndicator className={clsx(styledSlots.swatchIndicator)}>✓</ColorPicker.SwatchIndicator>
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
        <ColorPicker.SwatchTrigger value="blue" className={clsx(styledSlots.swatchTrigger)}>
          <ColorPicker.Swatch value="blue" className={clsx(styledSlots.swatch)}>
            <ColorPicker.SwatchIndicator className={clsx(styledSlots.swatchIndicator)}>✓</ColorPicker.SwatchIndicator>
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
        <ColorPicker.SwatchTrigger value="green" className={clsx(styledSlots.swatchTrigger)}>
          <ColorPicker.Swatch value="green" className={clsx(styledSlots.swatch)}>
            <ColorPicker.SwatchIndicator className={clsx(styledSlots.swatchIndicator)}>✓</ColorPicker.SwatchIndicator>
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>

      <ColorPicker.View format="rgba" className={clsx(styledSlots.view)}>
        <ColorPicker.ChannelInput channel="hex" className={clsx(styledSlots.channelInput)} />
        <ColorPicker.ChannelInput channel="alpha" className={clsx(styledSlots.channelInput)} />
      </ColorPicker.View>

      <ColorPicker.View format="hsla" className={clsx(styledSlots.view)}>
        <ColorPicker.ChannelInput channel="hue" className={clsx(styledSlots.channelInput)} />
        <ColorPicker.ChannelInput channel="saturation" className={clsx(styledSlots.channelInput)} />
        <ColorPicker.ChannelInput channel="lightness" className={clsx(styledSlots.channelInput)} />
      </ColorPicker.View>

      <ColorPicker.EyeDropperTrigger className={clsx(styledSlots.eyeDropperTrigger)}>
        Pick color
      </ColorPicker.EyeDropperTrigger>
    </ColorPicker.Content>
  );
};

export const ColorPickerControl = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyles,
      park: park.colorPickerStyles,
      shadcn: shadcn.colorPickerStyles
    },
    theme
  );

  return (
    <ColorPicker.Control className={clsx(styledSlots.control)}>
      <ColorPicker.ChannelInput channel="hex" className={clsx(styledSlots.channelInput)} />
      <ColorPicker.ChannelInput channel="alpha" className={clsx(styledSlots.channelInput)} />
      <ColorPicker.ValueText className={clsx(styledSlots.valueText)} />
      <ColorPicker.Trigger className={clsx(styledSlots.trigger)}>
        <ColorPicker.TransparencyGrid className={clsx(styledSlots.transparencyGrid)} />
        <ColorPicker.Context>
          {(colorPicker) => <ColorPicker.Swatch value={colorPicker.value} className={clsx(styledSlots.swatch)} />}
        </ColorPicker.Context>
      </ColorPicker.Trigger>
    </ColorPicker.Control>
  );
};

export const ColorPickerSwatch = (props: ColorPicker.SwatchBaseProps & { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyles,
      park: park.colorPickerStyles,
      shadcn: shadcn.colorPickerStyles
    },
    props.theme
  );
  const { value, ...rest } = props;

  return (
    <ColorPicker.SwatchTrigger value={value} className={clsx(styledSlots.swatchTrigger)} {...rest}>
      <ColorPicker.Swatch value={value} className={clsx(styledSlots.swatch)}>
        <ColorPicker.SwatchIndicator className={clsx(styledSlots.swatchIndicator)}>✓</ColorPicker.SwatchIndicator>
      </ColorPicker.Swatch>
    </ColorPicker.SwatchTrigger>
  );
};

export const ColorPickerSlider = (props: ColorPicker.ChannelSliderBaseProps & { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyles,
      park: park.colorPickerStyles,
      shadcn: shadcn.colorPickerStyles
    },
    props.theme
  );

  return (
    <ColorPicker.ChannelSlider className={clsx(styledSlots.channelSlider)} {...props}>
      <ColorPicker.TransparencyGrid className={clsx(styledSlots.transparencyGrid)} />
      <ColorPicker.ChannelSliderTrack className={clsx(styledSlots.channelSliderTrack)} />
      <ColorPicker.ChannelSliderThumb className={clsx(styledSlots.channelSliderThumb)} />
    </ColorPicker.ChannelSlider>
  );
};
