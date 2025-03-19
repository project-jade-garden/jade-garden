import { RadioGroup } from "@kobalte/core/radio-group";
import { For } from "solid-js";

export const Basic = () => {
  return (
    <RadioGroup class="radio-group">
      <RadioGroup.Label class="radio-group__label">Favorite fruit</RadioGroup.Label>
      <div class="radio-group__items" role="presentation">
        <For each={["Apple", "Orange", "Watermelon"]}>
          {(fruit) => (
            <RadioGroup.Item value={fruit} class="radio">
              <RadioGroup.ItemInput class="radio__input" />
              <RadioGroup.ItemControl class="radio__control">
                <RadioGroup.ItemIndicator class="radio__indicator" />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemLabel class="radio__label">{fruit}</RadioGroup.ItemLabel>
            </RadioGroup.Item>
          )}
        </For>
      </div>
    </RadioGroup>
  );
};
