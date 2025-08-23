import { Checkbox } from "@ark-ui/react/checkbox";
import { CheckIcon } from "lucide-react";

export const Basic = () => {
  return (
    <Checkbox.Root>
      <Checkbox.Label>Checkbox</Checkbox.Label>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
