import { Collapsible } from "@kobalte/core/collapsible";
import { ChevronDownIcon } from "lucide-solid";

export const Basic = () => {
  return (
    <Collapsible class="collapsible">
      <Collapsible.Trigger class="collapsible__trigger">
        <span>What is Kobalte?</span>
        <ChevronDownIcon class="collapsible__trigger-icon" />
      </Collapsible.Trigger>
      <Collapsible.Content class="collapsible__content">
        <p class="collapsible__content-text">
          Kobalte is a UI toolkit for building accessible web apps and design systems with SolidJS. It provides a set of
          low-level UI components and primitives which can be the foundation for your design system implementation.
        </p>
      </Collapsible.Content>
    </Collapsible>
  );
};
