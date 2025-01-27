import { RadioGroup, useRadioGroup } from "@ark-ui/react/radio-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.radioGroupStyles, park: park.radioGroupStyles, shadcn: shadcn.radioGroupStyles },
    theme
  );
  const frameworks = ["React", "Solid", "Vue"];

  const radioGroup = useRadioGroup();

  return (
    <>
      <button type="button" onClick={() => radioGroup.focus()}>
        Focus
      </button>

      <RadioGroup.RootProvider value={radioGroup}>
        <RadioGroup.Label>Framework</RadioGroup.Label>
        <RadioGroup.Indicator />
        {frameworks.map((framework) => (
          <RadioGroup.Item key={framework} value={framework}>
            <RadioGroup.ItemText>{framework}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        ))}
      </RadioGroup.RootProvider>
    </>
  );
};
