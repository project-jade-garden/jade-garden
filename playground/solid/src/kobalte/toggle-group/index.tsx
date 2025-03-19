import { ToggleGroup } from "@kobalte/core/toggle-group";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-solid";

export const Basic = () => {
  return (
    <ToggleGroup class="toggle-group">
      <ToggleGroup.Item class="toggle-group__item" value="bold" aria-label="Bold">
        <BoldIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item class="toggle-group__item" value="italic" aria-label="Italic">
        <ItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item class="toggle-group__item" value="underline" aria-label="Underline">
        <UnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup>
  );
};
