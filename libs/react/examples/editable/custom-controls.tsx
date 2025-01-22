import { Editable } from "@ark-ui/react/editable";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const CustomControls = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.editableStyledSlots, park: park.editableStyledSlots, shadcn: shadcn.editableStyledSlots },
    theme
  );

  return (
    <Editable.Root placeholder="enter a value" defaultValue="Chakra" className={clsx(styledSlots.root)}>
      <Editable.Label className={clsx(styledSlots.label)}>Label</Editable.Label>
      <Editable.Area className={clsx(styledSlots.area)}>
        <Editable.Input className={clsx(styledSlots.input)} />
        <Editable.Preview className={clsx(styledSlots.preview)} />
      </Editable.Area>
      <Editable.Context>
        {(editable) => (
          <Editable.Control className={clsx(styledSlots.control)}>
            {editable.editing ? (
              <>
                <Editable.SubmitTrigger className={clsx(styledSlots.submitTrigger)}>Save</Editable.SubmitTrigger>
                <Editable.CancelTrigger className={clsx(styledSlots.cancelTrigger)}>Cancel</Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger className={clsx(styledSlots.editTrigger)}>Edit</Editable.EditTrigger>
            )}
          </Editable.Control>
        )}
      </Editable.Context>
    </Editable.Root>
  );
};
