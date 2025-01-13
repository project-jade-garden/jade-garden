import { Fieldset } from "@ark-ui/react/fieldset";
import { fieldsetStyledSlots as minimal } from "@spark-css/theme-minimal";
import { fieldsetStyledSlots as park } from "@spark-css/theme-park";
import { fieldsetStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = (props: Fieldset.RootProps & { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, props.theme);

  return (
    <Fieldset.Root {...props}>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Fieldset.HelperText>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText>Error text</Fieldset.ErrorText>
    </Fieldset.Root>
  );
};
