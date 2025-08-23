import type { JadeGarden } from "jade-garden";
import { cx } from "jade-garden/class-utils";
import type { ClassNameValue, NestedTraits } from "./types";

/**
 * Generates CSS class names and data attributes for a part of an anatomy.
 *
 * @template T - An interface defining the shape of the data attributes.
 * @returns {string} A string of merged class names and data attributes.
 */
export const traits = <T extends Record<string, NestedTraits | ClassNameValue>>(
  props?: JadeGarden.ClassProp & { data?: T }
): string => {
  const appendDataAttribute = (
    dataAttributes: string,
    attributeKey: string,
    attributeValue: ClassNameValue
  ): string => {
    const prefix = dataAttributes.length ? " " : "";
    const dataAttributeStr = `data-[${attributeKey}]`;

    if (Array.isArray(attributeValue)) {
      return dataAttributes + prefix + attributeValue.map((v) => `${dataAttributeStr}:${v}`).join(" ");
    }

    if (typeof attributeValue === "string" && attributeValue.length) {
      return `${dataAttributes}${prefix}${dataAttributeStr}:${attributeValue}`;
    }

    return dataAttributes;
  };

  const appendConditionalDataAttribute = (
    dataAttributes: string,
    attributeKey: string,
    attributeValue: NestedTraits
  ): string => {
    let result = dataAttributes;

    for (const condition in attributeValue) {
      const prefix = result.length ? " " : "";

      if (Object.hasOwn(attributeValue, condition)) {
        const value = attributeValue[condition];
        const dataAttributeStr = `data-[${attributeKey}=${condition}]`;
        if (Array.isArray(value)) {
          result += prefix + value.map((v) => `${dataAttributeStr}:${v}`).join(" ");
        }

        if (typeof value === "string" && value.length) {
          result += `${prefix}${dataAttributeStr}:${value}`;
        }
      }
    }

    return result;
  };

  let dataAttributes = "";

  if (typeof props?.data === "object" && !Array.isArray(props?.data) && Object.keys(props?.data).length > 0) {
    for (const key of Object.keys(props?.data)) {
      const value = props?.data[key];

      if (typeof value === "object" && !Array.isArray(value)) {
        dataAttributes = appendConditionalDataAttribute(dataAttributes, key, value);
      } else if (typeof value !== "undefined") {
        dataAttributes = appendDataAttribute(dataAttributes, key, value);
      }
    }
  }

  return cx(props?.class, props?.className, dataAttributes);
};
