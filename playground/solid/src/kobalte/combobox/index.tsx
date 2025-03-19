import { Combobox } from "@kobalte/core/combobox";
import { CheckIcon, ChevronsUpDown } from "lucide-solid";

const ALL_OPTIONS = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
export const Basic = () => {
  return (
    <Combobox
      options={ALL_OPTIONS}
      placeholder="Search a fruit…"
      itemComponent={(props) => (
        <Combobox.Item item={props.item} class="combobox__item">
          <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
          <Combobox.ItemIndicator class="combobox__item-indicator">
            <CheckIcon />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      )}
    >
      <Combobox.Control class="combobox__control" aria-label="Fruit">
        <Combobox.Input class="combobox__input" />
        <Combobox.Trigger class="combobox__trigger">
          <Combobox.Icon class="combobox__icon">
            <ChevronsUpDown />
          </Combobox.Icon>
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Portal>
        <Combobox.Content class="combobox__content">
          <Combobox.Listbox class="combobox__listbox" />
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox>
  );
};
