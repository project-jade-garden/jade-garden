import { Clipboard, useClipboard } from "@ark-ui/react/clipboard";
import { clipboardStyledSlots as minimal } from "@spark-css/theme-minimal";
import { clipboardStyledSlots as park } from "@spark-css/theme-park";
import { clipboardStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { CheckIcon, ClipboardCopyIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const clipboard = useClipboard({ value: "https://ark-ui.com" });

  return (
    <>
      <button type="button" onClick={() => clipboard.copy()}>
        Copy
      </button>

      <Clipboard.RootProvider value={clipboard} className={clsx(styledSlots.root)}>
        <Clipboard.Label className={clsx(styledSlots.label)}>Copy this link</Clipboard.Label>
        <Clipboard.Control className={clsx(styledSlots.control)}>
          <Clipboard.Input className={clsx(styledSlots.input)} />
          <Clipboard.Trigger className={clsx(styledSlots.trigger)}>
            <Clipboard.Indicator copied={<CheckIcon />} className={clsx(styledSlots.indicator)}>
              <ClipboardCopyIcon />
            </Clipboard.Indicator>
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.RootProvider>
    </>
  );
};
