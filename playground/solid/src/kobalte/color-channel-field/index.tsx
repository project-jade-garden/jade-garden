import { ColorChannelField } from "@kobalte/core/color-channel-field";
import { ArrowBigUp } from "lucide-solid";

export const Basic = () => {
  return (
    <ColorChannelField class="color-channel-field" channel="hue">
      <ColorChannelField.Label class="color-channel-field__label">Hue</ColorChannelField.Label>
      <div class="color-channel-field__group">
        <ColorChannelField.Input class="color-channel-field__input" />
        <ColorChannelField.IncrementTrigger aria-label="Increment" class="color-channel-field__increment">
          <ArrowBigUp />
        </ColorChannelField.IncrementTrigger>
        <ColorChannelField.DecrementTrigger aria-label="Decrement" class="color-channel-field__decrement">
          <ArrowBigUp style="transform: rotate(180deg);" />
        </ColorChannelField.DecrementTrigger>
      </div>
    </ColorChannelField>
  );
};
