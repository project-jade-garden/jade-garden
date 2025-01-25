import { QrCode } from "@ark-ui/react/qr-code";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.qrCode, park: park.qrCode, shadcn: shadcn.qrCode }, theme);
  const [value, setValue] = useState("http://ark-ui.com");

  return (
    <QrCode.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  );
};
