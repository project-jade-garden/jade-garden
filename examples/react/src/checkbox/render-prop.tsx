import { Checkbox } from "@ark-ui/react/checkbox";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const RenderProp = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.checkboxStyles, park: park.checkboxStyles, shadcn: shadcn.checkboxStyles },
    theme
  );

  return (
    <Checkbox.Root className={clsx(styledSlots.root)}>
      <Checkbox.Control className={clsx(styledSlots.control)}>
        <Checkbox.Indicator className={clsx(styledSlots.indicator)}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Context>
        {(checkbox) => (
          <Checkbox.Label className={clsx(styledSlots.label)}>Checkbox {checkbox.checked.toString()}</Checkbox.Label>
        )}
      </Checkbox.Context>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
