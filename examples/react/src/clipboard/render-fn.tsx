import { Clipboard } from "@ark-ui/react/clipboard";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { CheckIcon, ClipboardCopyIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const RenderFn = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.clipboard, park: park.clipboard, shadcn: shadcn.clipboard }, theme);

  return (
    <Clipboard.Root value="https://ark-ui.com" className={clsx(styledSlots.root)}>
      <Clipboard.Label className={clsx(styledSlots.label)}>Copy this link</Clipboard.Label>
      <Clipboard.Control className={clsx(styledSlots.control)}>
        <Clipboard.Input className={clsx(styledSlots.input)} />
        <Clipboard.Trigger className={clsx(styledSlots.trigger)}>
          <Clipboard.Context>
            {(clipboard) => (clipboard.copied ? <CheckIcon /> : <ClipboardCopyIcon />)}
          </Clipboard.Context>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  );
};
