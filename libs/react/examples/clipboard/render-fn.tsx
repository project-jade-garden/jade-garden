import { Clipboard } from "@ark-ui/react/clipboard";
import { clipboardStyledSlots as minimal } from "@spark-css/theme-minimal";
import { clipboardStyledSlots as park } from "@spark-css/theme-park";
import { clipboardStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { CheckIcon, ClipboardCopyIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const RenderFn = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

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
