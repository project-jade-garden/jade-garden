import { Select } from "@kobalte/core/select";
import { ArrowUpDown, CheckIcon } from "lucide-solid";

export const Basic = () => {
  return (
    <Select
      options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
      placeholder="Select a fruit…"
      itemComponent={(props) => (
        <Select.Item item={props.item} class="select__item">
          <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
          <Select.ItemIndicator class="select__item-indicator">
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      )}
    >
      <Select.Trigger class="select__trigger" aria-label="Fruit">
        <Select.Value class="select__value">{/* {state => state.selectedOption()} */}</Select.Value>
        <Select.Icon class="select__icon">
          <ArrowUpDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content class="select__content">
          <Select.Listbox class="select__listbox" />
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};
