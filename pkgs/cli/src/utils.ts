import { resolve } from "node:path";
import color from "picocolors";

export const usrPath = (path: string) => resolve(process.cwd(), path);

export const printErr = (msg: string) => color.bold(color.bgBlack(color.red(`❌ [ERR]: ${msg}`)));
