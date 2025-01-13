import { Checkbox } from "@ark-ui/react/checkbox";
import { checkboxStyledSlots as minimal } from "@spark-css/theme-minimal";
import { checkboxStyledSlots as park } from "@spark-css/theme-park";
import { checkboxStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [checked, setChecked] = useState<Checkbox.CheckedState>(true);

  return (
    <Checkbox.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)} className={clsx(styledSlots.root)}>
      <Checkbox.Label className={clsx(styledSlots.label)}>Checkbox</Checkbox.Label>
      <Checkbox.Control className={clsx(styledSlots.control)}>
        <Checkbox.Indicator className={clsx(styledSlots.indicator)}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
