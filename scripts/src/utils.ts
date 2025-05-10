import type { CheerioAPI } from "cheerio";
import { kebabCase, pascalCase } from "es-toolkit";

export const cheerioSiteMaps = {
  "ark-ui": ($: CheerioAPI, slots: string[]) => {
    const description = $("h1 + p").text();
    const traitsType: Record<string, Record<string, string>> = {};

    for (const slot of slots) {
      traitsType[slot] = {};
    }

    return { description, traitsType };
  },
  "base-ui": ($: CheerioAPI, slots: string[]) => {
    const description = $("h1 + p").text();
    const traitsType: Record<string, Record<string, string>> = {};

    for (const slot of slots) {
      traitsType[slot] = {};
    }

    return { description, traitsType };
  },
  "bits-ui": ($: CheerioAPI, slots: string[]) => {
    const description = $("h1 + p").text();
    const traitsType: Record<string, Record<string, string>> = {};

    for (const slot of slots) {
      traitsType[slot] = {};
    }

    return { description, traitsType };
  },
  kobalte: ($: CheerioAPI, slots: string[]) => {
    const description = $("h1 + p").text();
    const traitsType: Record<string, Record<string, string>> = {};

    for (const slot of slots) {
      traitsType[slot] = {};
    }

    return { description, traitsType };
  },
  "radix-ui": ($: CheerioAPI, slots: string[]) => {
    const description = $("h1 + p").text();
    const traitsType: Record<string, Record<string, string>> = {};

    for (const slot of slots) {
      traitsType[slot] = {};
    }

    return { description, traitsType };
  },
  "reka-ui": ($: CheerioAPI, slots: string[]) => {
    const description = $("div.mb-4.md\\:text-lg").text();
    const traitsType: Record<string, Record<string, string>> = {};

    for (const slot of slots) {
      traitsType[slot] = {};
    }

    return { description, traitsType };
  }
};

export const SITE_MAPS = {
  "ark-ui": {
    repo: (component: string) =>
      `https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/${kebabCase(component)}/${kebabCase(component)}.anatomy.ts`,
    site: "https://ark-ui.com/docs/components"
  },
  "base-ui": {
    repo: (component: string) =>
      `https://github.com/mui/base-ui/blob/master/packages/react/src/${kebabCase(component)}/index.parts.ts`,
    site: "https://base-ui.com/react/components"
  },
  "bits-ui": {
    repo: (component: string) =>
      `https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/${kebabCase(component)}/exports.ts`,
    site: "https://www.bits-ui.com/docs/components"
  },
  kobalte: {
    repo: (component: string) =>
      `https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/${kebabCase(component)}/index.tsx`,
    site: "https://kobalte.dev/docs/core/components"
  },
  "radix-ui": {
    repo: (component: string) =>
      `https://github.com/radix-ui/primitives/blob/main/packages/react/${kebabCase(component)}/src/index.ts`,
    site: "https://www.radix-ui.com/primitives/docs/components"
  },
  "reka-ui": {
    repo: (component: string) =>
      `https://github.com/unovue/reka-ui/blob/v2/packages/core/src/${pascalCase(component)}/index.ts`,
    site: "https://reka-ui.com/docs/components"
  }
};
