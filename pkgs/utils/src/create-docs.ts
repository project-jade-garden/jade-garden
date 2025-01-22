import type { PrintType, Slots } from "./types.js";

type Component = {
  name: string;
  description: string | string[];
};

type Args = Partial<{
  component: Component;
  slots: Slots;
  source: string | Component[];
}>;

type SlotsEntries = [string, string | string[]][];

const print = {
  inform: "32",
  anatomy: "33",
  styled: "34"
} satisfies Record<PrintType, string>;

const docDescription = (component: Component) => {
  let description = component.description;

  if (Array.isArray(description)) {
    description = `\n * ${description.join("\n * ")}`;
  }

  return `* **${component.name}**\n * @description ${description}\n`;
};

const docSource = (source: string | Component[]) => {
  if (Array.isArray(source)) {
    return source.reduce(
      (prevVal, { description, name }) => `${prevVal.length ? `${prevVal} ` : ""}* @see [${name}](${description})\n`,
      ""
    );
  }

  return `* @see [source](${source})\n`;
};

const docsAnatomy = (slots: SlotsEntries) => {
  return `* @returns\n * \`\`\`js\n * {\n${slots.reduce((prev, [k, v], i) => {
    const valueIsArray = Array.isArray(v);
    const result = valueIsArray ? v.join(" ") : v;

    return `${prev} *   ${k}: "${result}"${i !== slots.length - 1 ? "," : ""}\n`;
  }, "")} * }\n * \`\`\`\n *\n`;
};

const docsStyledSlots = (slots: SlotsEntries) => {
  return `* @example\n * \`\`\`css\n${slots.reduce((prev, [_, v], i) => {
    const valueIsArray = Array.isArray(v);
    const selector = valueIsArray ? v.shift() : v;
    const result = valueIsArray ? v.join(" ") : "";

    // ! Cannot use `@apply`
    // * JSDoc cannot escape `@` symbols: https://github.com/jsdoc/jsdoc/issues/821
    return `${prev} * .${selector} {${result.length !== 0 ? `\n *   (@)apply ${result};\n * }` : " }"}\n${i === slots.length - 1 ? "" : " *\n"}`;
  }, "")} * \`\`\`\n *\n`;
};

export const createDocs = (printOut: keyof typeof print, args: Args) => {
  const { component, slots, source } = args;

  let docs = " *\n ";
  switch (printOut) {
    case "anatomy": {
      if (!slots) {
        console.log("\x1b[31mERROR: Requires slots object!\x1b[0m");
        return;
      }

      docs += docsAnatomy(Object.entries(slots));
      break;
    }
    case "inform": {
      if (component || source) docs = "";
      else {
        console.log("\x1b[31mERROR: No component or source description!\x1b[0m");
        return;
      }
      break;
    }
    case "styled": {
      if (!slots) {
        console.log("\x1b[31mERROR: Requires slots object!\x1b[0m");
        return;
      }

      docs += docsStyledSlots(Object.entries(slots));
      break;
    }
    default: {
      if (component || source) docs = "";
      else {
        console.log("\x1b[31mERROR: No component or source description!\x1b[0m");
        return;
      }
      break;
    }
  }

  const res = [
    `\x1b[${print[printOut]}m/**\n`,
    `${component ? ` ${docDescription(component)}` : ""}`,
    docs,
    `${source ? ` ${docSource(source)} */` : ""}`,
    "\n\x1b[0m"
  ].join("");

  console.log(res);
};
