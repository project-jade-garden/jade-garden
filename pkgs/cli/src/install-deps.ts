import { spawn } from "node:child_process";
import * as p from "@clack/prompts";
import { type Agent, resolveCommand } from "package-manager-detector";
import { detect } from "package-manager-detector/detect";
import color from "picocolors";
import { packageDirectorySync } from "pkg-dir";
import type { Prompts } from "./prompts.js";
import { printErr } from "./utils.js";

const twUtils = {
  clsx: "clsx",
  tm: "tailwind-merge",
  tv: "tailwind-variants"
} as const;

const pmColor = (agent: Agent, str: string) => {
  switch (agent) {
    case "bun":
      return color.bgYellow(color.bgBlack(str));
    case "deno":
      return color.bgBlack(color.white(str));
    case "npm":
      return color.bgGreen(color.yellow(str));
    case "pnpm":
    case "pnpm@6":
      return color.bgRed(color.black(str));
    case "yarn":
    case "yarn@berry":
      return color.bgCyan(color.black(str));
    default:
      return str;
  }
};

export const installDeps = async ({ ui, util }: Pick<Prompts, "util" | "ui">) => {
  const install = await p.confirm({
    message: "Install dependencies?",
    initialValue: false
  });

  const deps = [`@ark-ui/${ui}`, "@spark-css/core", twUtils[util]];
  const cwd = packageDirectorySync() ?? process.cwd();
  const pm = await detect({ cwd });

  if (pm) {
    const res = resolveCommand(pm.agent, "add", deps);

    if (res?.args && res?.command) {
      const { args, command } = res;
      const installCmd = color.bold(pmColor(pm.agent, `${command} ${args.join(" ")}`));

      if (install) {
        const s = p.spinner();

        p.note(`👀 Detected ${pmColor(pm.agent, pm.agent)} at ${color.italic(color.underline(cwd))}`);
        s.start(`🏃 Running ${installCmd}`);
        try {
          const child = spawn(command, args, { cwd, shell: true, timeout: 15000 });
          await new Promise((resolve) => child.on("close", resolve)); // * done

          // ! Installation errors
          const { exitCode } = child;
          if (exitCode === null) {
            throw new Error("Timeout");
          }
          if (exitCode !== 0) {
            throw new Error("stdout");
          }

          s.stop(`✅ Installed ${color.bold(deps.join(" "))}`);
        } catch {
          s.stop(printErr("Installation failed."));
          p.note(`💾 You can install on your own with ${installCmd}`, "👍 Don't worry!");
        }
      } else {
        p.note(`💾 You can install later with ${installCmd}`, "👍 No worries!");
      }
    }
  } else if (!pm && install) {
    p.note(printErr("Package not detected."));
    p.note(`💾 You can install the dependencies on your own: ${color.bold(deps.join(" "))}`, "👍 Don't worry!");
  }
};
