import { Checkbox } from "@ark-ui/react/checkbox";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { CheckIcon, MinusIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const Indeterminate = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.checkboxStyles, park: park.checkboxStyles, shadcn: shadcn.checkboxStyles },
    theme
  );

  return (
    <Checkbox.Root checked="indeterminate" className={clsx(styledSlots.root)}>
      <Checkbox.Label className={clsx(styledSlots.label)}>Checkbox</Checkbox.Label>
      <Checkbox.Control className={clsx(styledSlots.control)}>
        <Checkbox.Indicator className={clsx(styledSlots.indicator)}>
          <CheckIcon />
        </Checkbox.Indicator>
        <Checkbox.Indicator indeterminate className={clsx(styledSlots.indicator)}>
          <MinusIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
