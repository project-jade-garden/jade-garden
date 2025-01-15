import { QrCode, useQrCode } from "@ark-ui/react/qr-code";
import { qrCodeStyledSlots as minimal } from "@spark-css/theme-minimal";
import { qrCodeStyledSlots as park } from "@spark-css/theme-park";
import { qrCodeStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [value, setValue] = useState("http://ark-ui.com");
  const qrCode = useQrCode({ value });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setValue("https://chakra-ui.com");
        }}
      >
        Set Value
      </button>
      <QrCode.RootProvider value={qrCode}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.RootProvider>
    </>
  );
};
