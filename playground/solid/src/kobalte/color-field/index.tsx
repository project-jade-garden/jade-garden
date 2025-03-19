import { ColorField } from "@kobalte/core/color-field";

export const Basic = () => {
  return (
    <ColorField class="color-field">
      <ColorField.Label class="color-field__label">Favorite hex color</ColorField.Label>
      <ColorField.Input class="color-field__input" />
    </ColorField>
  );
};
