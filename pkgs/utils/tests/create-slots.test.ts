import { describe, expect, test } from "bun:test";
import { camelCase, kebabCase, pascalCase, snakeCase } from "es-toolkit";
import { createSlots } from "../src/create-slots.js";
import type { CSArgs } from "../src/types.js";

const transformStr = (str: string, caseConvention?: CSArgs["caseConvention"]) => {
  switch (caseConvention) {
    case "camel":
      return camelCase(str);
    case "kebab":
      return kebabCase(str);
    case "pascal":
      return pascalCase(str);
    case "snake":
      return snakeCase(str);
    default:
      return kebabCase(str);
  }
};

describe("createSlots function", () => {
  const avatar = ["root", "image", "fallback"];
  const colorPicker = [
    "root",
    "label",
    "control",
    "trigger",
    "positioner",
    "content",
    "area",
    "areaThumb",
    "valueText",
    "areaBackground",
    "channelSlider",
    "channelSliderLabel",
    "channelSliderTrack",
    "channelSliderThumb",
    "channelSliderValueText",
    "channelInput",
    "transparencyGrid",
    "swatchGroup",
    "swatchTrigger",
    "swatchIndicator",
    "swatch",
    "eyeDropperTrigger",
    "formatTrigger",
    "formatSelect",
    "view"
  ];

  test("minimum parameters return default object", () => {
    const obj = createSlots("avatar", Object.values(avatar));
    expect(obj).toEqual({
      base: "avatar",
      fallback: "avatar__fallback",
      image: "avatar__image",
      root: "avatar__root"
    });
  });

  test.each(["camel", "kebab", "pascal", "snake"])("'%s' case convetion works", (caseConvention) => {
    const castCaseConvention = caseConvention as CSArgs["caseConvention"];
    // @ts-expect-error: Type 'undefined' is not assignable to type '"camel" | "kebab" | "pascal" | "snake"'.
    const slots = createSlots("color-picker", Object.values(colorPicker), { caseConvention: castCaseConvention });

    const baseCased = transformStr("color-picker", castCaseConvention);

    for (const slot in slots) {
      if (slot === "base") expect(slots[slot]).toEqual(baseCased);
      else expect(slots[slot]).toEqual(`${baseCased}__${transformStr(slot, castCaseConvention)}`);
    }
  });

  test("prefix is added to base and slots", () => {
    const obj = createSlots("avatar", Object.values(avatar), { prefix: "ark", caseConvention: "camel" });
    expect(obj).toEqual({
      base: "arkAvatar",
      fallback: "arkAvatar__fallback",
      image: "arkAvatar__image",
      root: "arkAvatar__root"
    });
  });

  test.each(["camel", "kebab", "pascal", "snake"])(
    "'ark' prefix and '%s' case convetion returns correct object",
    (caseConvention) => {
      const castCaseConvention = caseConvention as CSArgs["caseConvention"];
      // @ts-expect-error: Type 'undefined' is not assignable to type '"camel" | "kebab" | "pascal" | "snake"'.
      const slots = createSlots("color-picker", Object.values(colorPicker), {
        caseConvention: castCaseConvention,
        prefix: "ark"
      });

      const baseCased = transformStr("ark-color-picker", castCaseConvention);

      for (const slot in slots) {
        if (slot === "base") expect(slots[slot]).toEqual(baseCased);
        else expect(slots[slot]).toEqual(`${baseCased}__${transformStr(slot, castCaseConvention)}`);
      }
    }
  );
});
