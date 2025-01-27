import { RadioGroup } from "@ark-ui/react/radio-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Disabled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.radioGroupStyles, park: park.radioGroupStyles, shadcn: shadcn.radioGroupStyles },
    theme
  );
  const frameworks = ["React", "Solid", "Vue"];

  return (
    <RadioGroup.Root disabled>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      {frameworks.map((framework) => (
        <RadioGroup.Item key={framework} value={framework}>
          <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
