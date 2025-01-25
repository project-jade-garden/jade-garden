import { Editable, useEditable } from "@ark-ui/react/editable";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.editable, park: park.editable, shadcn: shadcn.editable }, theme);
  const editable = useEditable({ placeholder: "Placeholder" });

  return (
    <>
      <button type="button" onClick={() => editable.edit()}>
        Edit
      </button>

      <Editable.RootProvider value={editable} className={clsx(styledSlots.root)}>
        <Editable.Label className={clsx(styledSlots.label)}>Label</Editable.Label>
        <Editable.Area className={clsx(styledSlots.area)}>
          <Editable.Input className={clsx(styledSlots.input)} />
          <Editable.Preview className={clsx(styledSlots.preview)} />
        </Editable.Area>
      </Editable.RootProvider>
    </>
  );
};
