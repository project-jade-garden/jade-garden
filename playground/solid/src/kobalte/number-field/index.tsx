import { NumberField } from "@kobalte/core/number-field";
import { ArrowDown, ArrowUp } from "lucide-solid";

export const Basic = () => {
  return (
    <NumberField class="number-field">
      <NumberField.Label class="number-field__label">Quantity</NumberField.Label>
      <div class="number-field__group">
        <NumberField.Input class="number-field__input" />
        <NumberField.IncrementTrigger aria-label="Increment" class="number-field__increment">
          <ArrowUp />
        </NumberField.IncrementTrigger>
        <NumberField.DecrementTrigger aria-label="Decrement" class="number-field__decrement">
          <ArrowDown />
        </NumberField.DecrementTrigger>
      </div>
    </NumberField>
  );
};
