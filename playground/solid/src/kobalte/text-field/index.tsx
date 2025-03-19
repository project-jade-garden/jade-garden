import { TextField } from "@kobalte/core/text-field";

export const Basic = () => {
  return (
    <TextField class="text-field">
      <TextField.Label class="text-field__label">Favorite fruit</TextField.Label>
      <TextField.Input class="text-field__input" />
    </TextField>
  );
};
