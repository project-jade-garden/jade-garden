import { Checkbox } from "@ark-ui/react/checkbox";
import { checkboxStyledSlots as minimal } from "@spark-css/theme-minimal";
import { checkboxStyledSlots as park } from "@spark-css/theme-park";
import { checkboxStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Checkbox.Root className={clsx(styledSlots.root)}>
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
