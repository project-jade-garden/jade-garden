import { Checkbox, useCheckbox } from "@ark-ui/react/checkbox";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.checkboxStyledSlots, park: park.checkboxStyledSlots, shadcn: shadcn.checkboxStyledSlots },
    theme
  );
  const checkbox = useCheckbox();

  return (
    <>
      <span>{checkbox.checked ? "Checked" : "UnChecked"}</span>

      <Checkbox.RootProvider value={checkbox} className={clsx(styledSlots.root)}>
        <Checkbox.Label className={clsx(styledSlots.label)}>Checkbox</Checkbox.Label>
        <Checkbox.Control className={clsx(styledSlots.control)}>
          <Checkbox.Indicator className={clsx(styledSlots.indicator)}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </Checkbox.RootProvider>
    </>
  );
};
