import { log } from "@clack/prompts";
import { bgBlack, bold, cyanBright, greenBright, redBright, yellowBright } from "picocolors";

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
    warning(
      `The style configuration in "${componentDir}[${componentName}]" requires a "base" and/or "slots" property.`
    );
  },
  NoConfig() {
    warning(
      "Could not detect your config. Specifiy a relative path with the '--config' flag, default export your config, and set `components`."
    );
  },
  NoName(componentDir: string): void {
    warning(`A style configuration in ${componentDir} requires a "name" property to output file.`);
  },
  NotArray(componentDir: string): void {
    warning(`The value in "components.${componentDir}" is not an array.`);
  },
  ReservedDirKeyword(componentDir: string): void {
    warning(`Key "${componentDir}" in "components" is a reserved keyword.`);
  },
  ReservedNameKeyword(componentName: string, componentDir: string): void {
    warning(`"${componentName}" in "components.${componentDir}" is a reserved keyword.`);
  },
  StyleNameConflict(componentName: string, componentDir: string): void {
    warning(
      `Duplicate "name" property detected. Rename "${componentName}" in "${componentDir}[${componentName}]" to output file.`
    );
  }
};

export const logs = {
  error,
  info,
  success,
  warning
};
