/** Prop type for the `createSlots` function */
export type CSArgs = {
  caseConvention?: "camel" | "kebab" | "pascal" | "snake";
  prefix?: string;
};

export type PrintType = "anatomy" | "inform" | "styled";

export type Slots = Record<string, string | string[]>;
