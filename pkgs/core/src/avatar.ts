import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as avatarAnatomy } from "@zag-js/avatar";

const component = {
  name: "Avatar",
  description: "A graphical representation of the user, often used in profile sections."
};
const source = "https://ark-ui.com/vue/docs/components/avatar#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("avatar", avatarAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
