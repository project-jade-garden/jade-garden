import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as avatarAnatomy } from "@zag-js/avatar";

const component = {
  name: "Avatar",
  description: "A graphical representation of the user, often used in profile sections."
};
const source = "https://ark-ui.com/vue/docs/components/avatar#anatomy";

export type AvatarSlots = keyof ReturnType<typeof createAvatarSlots>;

export const createAvatarSlots = (args?: CSArgs) => createSlots("avatar", avatarAnatomy.keys(), args);

export const createAvatarDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
