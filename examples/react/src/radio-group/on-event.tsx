import { RadioGroup } from "@ark-ui/react/radio-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const OnEvent = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.radioGroup, park: park.radioGroup, shadcn: shadcn.radioGroup },
    theme
  );
  const frameworks = ["React", "Solid", "Vue"];

  return (
    <RadioGroup.Root onValueChange={(details) => console.log(details.value)}>
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
