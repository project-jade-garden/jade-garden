import { QrCode, useQrCode } from "@ark-ui/react/qr-code";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.qrCodeStyles, park: park.qrCodeStyles, shadcn: shadcn.qrCodeStyles },
    theme
  );
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
