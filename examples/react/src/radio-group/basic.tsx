import { RadioGroup } from "@ark-ui/react/radio-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.radioGroupStyles, park: park.radioGroupStyles, shadcn: shadcn.radioGroupStyles },
    theme
  );
  const frameworks = ["React", "Solid", "Vue"];

  return (
    <RadioGroup.Root>
      <RadioGroup.Label>Framework</RadioGroup.Label>
      <RadioGroup.Indicator />
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
