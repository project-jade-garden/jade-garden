////////////////////////////////////////////////////////////////////////////////////

import { type IconStyles, iconStyles as icon } from "./icon";
import { type InputStyles, inputStyles as input } from "./input";
import { type KbdStyles, kbdStyles as kbd } from "./kbd";
import { type LabelStyles, labelStyles as label } from "./label";
import { type LinkStyles, linkStyles as link } from "./link";

////////////////////////////////////////////////////////////////////////////////////

export type { IconStyles, InputStyles, KbdStyles, LabelStyles, LinkStyles };

////////////////////////////////////////////////////////////////////////////////////

export const iconStyles = icon;
export const inputStyles = input;
export const kbdStyles = kbd;
export const labelStyles = label;
export const linkStyles = link;

////////////////////////////////////////////////////////////////////////////////////

export const misconfigured = [iconStyles, inputStyles, kbdStyles, labelStyles, linkStyles];

////////////////////////////////////////////////////////////////////////////////////
