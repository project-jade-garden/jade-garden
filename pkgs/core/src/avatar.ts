import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as avatarAnatomy } from "@zag-js/avatar";

/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 * @see [source](https://ark-ui.com/vue/docs/components/avatar#anatomy)
 */
export const createAvatarSlots = (props?: GSProps) => generateSlots("avatar", avatarAnatomy.keys(), props);

/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 * @see [source](https://ark-ui.com/vue/docs/components/avatar#anatomy)
 */
export type AvatarSlots = keyof ReturnType<typeof createAvatarSlots>;
