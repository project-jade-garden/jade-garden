import { QrCode } from "@ark-ui/react/qr-code";
import { qrCodeStyledSlots as minimal } from "@spark-css/theme-minimal";
import { qrCodeStyledSlots as park } from "@spark-css/theme-park";
import { qrCodeStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [value, setValue] = useState("http://ark-ui.com");

  return (
    <QrCode.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  );
};
