////////////////////////////////////////////////////////////////////////////////////

import { type BadgeStyles, badgeStyles as badge } from "./badge";
import { type BlockquoteStyles, blockquoteStyles as blockquote } from "./blockquote";
import { type ButtonStyles, buttonStyles as button } from "./button";
import { type CodeStyles, codeStyles as code } from "./code";
import { type HeadingStyles, headingStyles as heading } from "./heading";

////////////////////////////////////////////////////////////////////////////////////

export type { BadgeStyles, BlockquoteStyles, ButtonStyles, CodeStyles, HeadingStyles };

////////////////////////////////////////////////////////////////////////////////////

export const badgeStyles = badge;
export const blockquoteStyles = blockquote;
export const buttonStyles = button;
export const codeStyles = code;
export const headingStyles = heading;

////////////////////////////////////////////////////////////////////////////////////

export const none = [badgeStyles, blockquote, buttonStyles, codeStyles, headingStyles];

////////////////////////////////////////////////////////////////////////////////////
