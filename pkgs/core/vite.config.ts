import { copyFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { globbySync } from "globby";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        accordion: resolve(__dirname, "src/accordion.ts"),
        avatar: resolve(__dirname, "src/avatar.ts"),
        carousel: resolve(__dirname, "src/carousel.ts"),
        checkbox: resolve(__dirname, "src/checkbox.ts"),
        clipboard: resolve(__dirname, "src/clipboard.ts"),
        collapsible: resolve(__dirname, "src/collapsible.ts"),
        "color-picker": resolve(__dirname, "src/color-picker.ts"),
        combobox: resolve(__dirname, "src/combobox.ts"),
        "date-picker": resolve(__dirname, "src/date-picker.ts"),
        dialog: resolve(__dirname, "src/dialog.ts"),
        editable: resolve(__dirname, "src/editable.ts"),
        field: resolve(__dirname, "src/field.ts"),
        fieldset: resolve(__dirname, "src/fieldset.ts"),
        "file-upload": resolve(__dirname, "src/file-upload.ts"),
        "hover-card": resolve(__dirname, "src/hover-card.ts"),
        index: resolve(__dirname, "src/index.ts"),
        menu: resolve(__dirname, "src/menu.ts"),
        "number-input": resolve(__dirname, "src/number-input.ts"),
        pagination: resolve(__dirname, "src/pagination.ts"),
        "pin-input": resolve(__dirname, "src/pin-input.ts"),
        popover: resolve(__dirname, "src/popover.ts"),
        progress: resolve(__dirname, "src/progress.ts"),
        "qr-code": resolve(__dirname, "src/qr-code.ts"),
        "radio-group": resolve(__dirname, "src/radio-group.ts"),
        "rating-group": resolve(__dirname, "src/rating-group.ts"),
        "segment-group": resolve(__dirname, "src/segment-group.ts"),
        select: resolve(__dirname, "src/select.ts"),
        "signature-pad": resolve(__dirname, "src/signature-pad.ts"),
        slider: resolve(__dirname, "src/slider.ts"),
        splitter: resolve(__dirname, "src/splitter.ts"),
        steps: resolve(__dirname, "src/steps.ts"),
        switch: resolve(__dirname, "src/switch.ts"),
        tabs: resolve(__dirname, "src/tabs.ts"),
        "tags-input": resolve(__dirname, "src/tags-input.ts"),
        timer: resolve(__dirname, "src/timer.ts"),
        toast: resolve(__dirname, "src/toast.ts"),
        "toggle-group": resolve(__dirname, "src/toggle-group.ts"),
        toggle: resolve(__dirname, "src/toggle.ts"),
        tooltip: resolve(__dirname, "src/tooltip.ts"),
        "tree-view": resolve(__dirname, "src/tree-view.ts"),
        utils: resolve(__dirname, "src/utils.ts")
      },
      formats: ["cjs", "es"]
    }
  },
  plugins: [
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
      afterBuild: () => {
        globbySync("dist/**.d.ts").map((file) => {
          copyFileSync(file, file.replace(/\.d\.ts$/, ".d.cts"));
        });
      }
    })
  ]
});
