import { Checkbox } from "@kobalte/core/checkbox";
import { CheckIcon } from "lucide-solid";

export const Basic = () => {
  return (
    <Checkbox class="checkbox">
      <Checkbox.Input class="checkbox__input" />
      <Checkbox.Control class="checkbox__control">
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label class="checkbox__label">Subscribe</Checkbox.Label>
    </Checkbox>
  );
};
