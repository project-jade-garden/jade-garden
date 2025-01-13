import { Checkbox } from "@ark-ui/react/checkbox";
import { checkboxStyledSlots as minimal } from "@spark-css/theme-minimal";
import { checkboxStyledSlots as park } from "@spark-css/theme-park";
import { checkboxStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-react";

const items = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" }
];
import { type Theme, getTheme } from "../utils";

export const GroupWithInvalid = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Checkbox.Group invalid className={clsx(styledSlots.group)}>
      {items.map((item) => (
        <Checkbox.Root value={item.value} key={item.value} className={clsx(styledSlots.root)}>
          <Checkbox.Label className={clsx(styledSlots.label)}>{item.label}</Checkbox.Label>
          <Checkbox.Control className={clsx(styledSlots.control)}>
            <Checkbox.Indicator className={clsx(styledSlots.indicator)}>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
      ))}
    </Checkbox.Group>
  );
};
