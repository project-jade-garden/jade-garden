import { cancel, log } from "@clack/prompts";

/* -----------------------------------------------------------------------------
 * Colors
 * -----------------------------------------------------------------------------*/

const p = process || {},
  argv = p.argv || [],
  env = p.env || {};

const isColorSupported =
  !(!!env.NO_COLOR || argv.includes("--no-color")) &&
  (!!env.FORCE_COLOR ||
    argv.includes("--color") ||
    p.platform === "win32" ||
    (p.stdout?.isTTY && env.TERM !== "dumb") ||
    !!env.CI);

const formatter =
  (open: string, close: string, replace = open) =>
  (input: unknown) => {
    let string = `${input}`,
      index = string.indexOf(close, open.length);
    return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
  };

const replaceClose = (string: string, close: string, replace: string, index: number) => {
  let result = "",
    cursor = 0;
  do {
    result += string.substring(cursor, index) + replace;
    cursor = index + close.length;
    index = string.indexOf(close, cursor);
  } while (~index);
  return result + string.substring(cursor);
};

const f = isColorSupported ? formatter : () => String;

// * Text
// const reset= f("\x1b[0m", "\x1b[0m");
const bold = f("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m");
// const dim= f("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m");
// const italic= f("\x1b[3m", "\x1b[23m");
// const underline= f("\x1b[4m", "\x1b[24m");
// const inverse= f("\x1b[7m", "\x1b[27m");
// const hidden= f("\x1b[8m", "\x1b[28m");
// const strikethrough= f("\x1b[9m", "\x1b[29m");

// * Foreground
// const black= f("\x1b[30m", "\x1b[39m");
// const red= f("\x1b[31m", "\x1b[39m");
// const green= f("\x1b[32m", "\x1b[39m");
// const yellow= f("\x1b[33m", "\x1b[39m");
// const blue= f("\x1b[34m", "\x1b[39m");
// const magenta= f("\x1b[35m", "\x1b[39m");
// const cyan= f("\x1b[36m", "\x1b[39m");
// const white= f("\x1b[37m", "\x1b[39m");
// const gray= f("\x1b[90m", "\x1b[39m");

// * Backgrounds
const bgBlack = f("\x1b[40m", "\x1b[49m");
// const bgRed= f("\x1b[41m", "\x1b[49m");
// const bgGreen= f("\x1b[42m", "\x1b[49m");
// const bgYellow= f("\x1b[43m", "\x1b[49m");
// const bgBlue= f("\x1b[44m", "\x1b[49m");
// const bgMagenta= f("\x1b[45m", "\x1b[49m");
// const bgCyan= f("\x1b[46m", "\x1b[49m");
// const bgWhite= f("\x1b[47m", "\x1b[49m");

// * Bright foreground
// const blackBright= f("\x1b[90m", "\x1b[39m");
const redBright = f("\x1b[91m", "\x1b[39m");
const greenBright = f("\x1b[92m", "\x1b[39m");
const yellowBright = f("\x1b[93m", "\x1b[39m");
// const blueBright= f("\x1b[94m", "\x1b[39m");
// const magentaBright= f("\x1b[95m", "\x1b[39m");
const cyanBright = f("\x1b[96m", "\x1b[39m");
// const whiteBright= f("\x1b[97m", "\x1b[39m");

// * Bright backgrounds
// const bgBlackBright= f("\x1b[100m", "\x1b[49m");
// const bgRedBright= f("\x1b[101m", "\x1b[49m");
// const bgGreenBright= f("\x1b[102m", "\x1b[49m");
// const bgYellowBright= f("\x1b[103m", "\x1b[49m");
// const bgBlueBright= f("\x1b[104m", "\x1b[49m");
// const bgMagentaBright= f("\x1b[105m", "\x1b[49m");
// const bgCyanBright= f("\x1b[106m", "\x1b[49m");
// const bgWhiteBright= f("\x1b[107m", "\x1b[49m");

/* -----------------------------------------------------------------------------
 * Logs
 * -----------------------------------------------------------------------------*/

const error = (message: string, useLog = true): string | undefined => {
  const msg = bgBlack(redBright(` ${useLog ? `${bold("[ERROR]")}: ` : ""}${message} `));

  if (!useLog) return msg;

  log.info(msg);
};

export const ERROR = {};

const info = (message: string, useLog = true): string | undefined => {
  const msg = bgBlack(cyanBright(` ${useLog ? `${bold("[INFO]")}: ` : ""}${message} `));

  if (!useLog) return msg;

  log.info(msg);
};

export const INFO = {
  ConfigNameConflict(componentName: string, componentDir: string): void {
    info(`Duplicate "name" property detected. Renaming "${componentName}" in "${componentDir}[${componentName}]".`);
  }
};

const success = (message: string, useLog = true): string | undefined => {
  const msg = ` ${bgBlack(greenBright(message))} `;

  if (!useLog) return msg;

  log.success(msg);
};

export const SUCCESS = {};

const warning = (message: string, useLog = true): string | undefined => {
  const msg = bgBlack(yellowBright(` ${useLog ? `${bold("[WARN]")}: ` : ""}${message} `));

  if (!useLog) return msg;

  log.warn(msg);
};

export const WARNING = {
  NoBaseOrSlots(componentName: string, componentDir: string) {
    warning(`The style configuration in "${componentDir}[${componentName}]" requires a "base" or "slots" property.`);
  },
  NoConfig() {
    warning(
      "Could not detect your config. Specifiy a relative path with the '--config' flag, default export your config, and set `styles`."
    );
  },
  NoName(componentDir: string): void {
    warning(`A style configuration in ${componentDir} requires a "name" property to output file.`);
  },
  NotArray(componentDir: string): void {
    warning(`The value in "styles.${componentDir}" is not an array.`);
  },
  ReservedDirKeyword(componentDir: string): void {
    warning(`Key "${componentDir}" in "styles" is a reserved keyword.`);
  },
  ReservedNameKeyword(componentName: string, componentDir: string): void {
    warning(`"${componentName}" in "styles.${componentDir}" is a reserved keyword.`);
  },
  StyleNameConflict(componentName: string, componentDir: string): void {
    warning(
      `Duplicate "name" property detected. Rename "${componentName}" in "${componentDir}[${componentName}]" to output file.`
    );
  }
};

export const cancelBuild = (): never => {
  cancel(warning("Canceling.", false));
  process.exit(0);
};

export const logs = {
  error,
  info,
  success,
  warning
};
