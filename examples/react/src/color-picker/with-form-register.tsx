import { ColorPicker } from "@ark-ui/react/color-picker";
import { minimal, park, shadcn } from "@spark-css/themes";
import { parseColor } from "@zag-js/color-utils";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { type Theme, getTheme } from "../utils";
import { ColorPickerContent } from "./_template";

interface FieldValues {
  color: string;
}

export const WithFormRegister = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyledSlots,
      park: park.colorPickerStyledSlots,
      shadcn: shadcn.colorPickerStyledSlots
    },
    theme
  );
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ColorPicker.Root className={clsx(styledSlots.root)} open defaultValue={parseColor("#eb5e41")}>
        <ColorPickerContent theme={theme} />
        <ColorPicker.HiddenInput {...register("color")} />
      </ColorPicker.Root>

      <button type="submit">Submit</button>
    </form>
  );
};
