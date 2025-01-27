import { Fieldset } from "@ark-ui/react/fieldset";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = (props: Fieldset.RootProps & { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.fieldsetStyles, park: park.fieldsetStyles, shadcn: shadcn.fieldsetStyles },
    props.theme
  );

  return (
    <Fieldset.Root {...props} className={clsx(styledSlots.root)}>
      <Fieldset.Legend className={clsx(styledSlots.legend)}>Legend</Fieldset.Legend>
      <Fieldset.HelperText className={clsx(styledSlots.helperText)}>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText className={clsx(styledSlots.errorText)}>Error text</Fieldset.ErrorText>
    </Fieldset.Root>
  );
};
