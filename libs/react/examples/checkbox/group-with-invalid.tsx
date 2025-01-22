import { Checkbox } from "@ark-ui/react/checkbox";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-react";

const items = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" }
];
import { type Theme, getTheme } from "../utils";

export const GroupWithInvalid = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.checkboxStyledSlots, park: park.checkboxStyledSlots, shadcn: shadcn.checkboxStyledSlots },
    theme
  );

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
