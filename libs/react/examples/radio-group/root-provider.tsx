import { RadioGroup, useRadioGroup } from "@ark-ui/react/radio-group";
import { radioGroupStyledSlots as minimal } from "@spark-css/theme-minimal";
import { radioGroupStyledSlots as park } from "@spark-css/theme-park";
import { radioGroupStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
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
