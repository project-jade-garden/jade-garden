////////////////////////////////////////////////////////////////////////////////////

import { type BadgeStyles, badgeStyles as badge } from "./badge";
import { type BlockquoteStyles, blockquoteStyles as blockquote } from "./blockquote";
import { type ButtonStyles, buttonStyles as button } from "./button";
import { type CodeStyles, codeStyles as code } from "./code";
import { type HeadingStyles, headingStyles as heading } from "./heading";
import { type IconStyles, iconStyles as icon } from "./icon";
import { type InputStyles, inputStyles as input } from "./input";
import { type KbdStyles, kbdStyles as kbd } from "./kbd";
import { type LabelStyles, labelStyles as label } from "./label";
import { type LinkStyles, linkStyles as link } from "./link";

////////////////////////////////////////////////////////////////////////////////////

export type {
  BadgeStyles,
  BlockquoteStyles,
  ButtonStyles,
  CodeStyles,
  HeadingStyles,
  IconStyles,
  InputStyles,
  KbdStyles,
  LabelStyles,
  LinkStyles
};

////////////////////////////////////////////////////////////////////////////////////

export const badgeStyles = badge;
export const blockquoteStyles = blockquote;
export const buttonStyles = button;
export const codeStyles = code;
export const headingStyles = heading;
export const iconStyles = icon;
export const inputStyles = input;
export const kbdStyles = kbd;
export const labelStyles = label;
export const linkStyles = link;

////////////////////////////////////////////////////////////////////////////////////

export const elements = [
  badgeStyles,
  blockquote,
  buttonStyles,
  codeStyles,
  headingStyles,
  iconStyles,
  inputStyles,
  kbdStyles,
  labelStyles,
  linkStyles
];

////////////////////////////////////////////////////////////////////////////////////
