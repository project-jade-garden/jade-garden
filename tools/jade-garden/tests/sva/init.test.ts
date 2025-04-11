import { describe, expect, test } from "bun:test";
import { cm, createSVA, cx } from "../../src";

const sva = createSVA(cx);

function parseClasses(result: string | string[]) {
  return (typeof result === "string" ? result.split(" ") : result).slice().sort();
}

expect.extend({
  toHaveClass(_received, _expected) {
    if (!Array.isArray(_expected) || typeof _received !== "string") {
      throw new Error("Invalid usage");
    }

    const expected = parseClasses(_expected);
    const received = parseClasses(_received);
    const pass = this.equals(expected, received) && expected.length === received.length;

    return {
      pass,
      message: () =>
        `expected ${this.utils.printReceived(received)} ${pass ? "not to be" : "to be"} ${this.utils.printExpected(expected)}`
    };
  }
});

declare module "bun:test" {
  interface Matchers<T> {
    toHaveClass(expected: string | string[]): T;
  }
}

describe("sva", () => {
  describe("default", () => {
    test("with nested arrays", () => {
      const menu = sva({
        slots: {
          root: ["base--styles-1", ["base--styles-2", ["base--styles-3"]]],
          item: ["slots--item-1", ["slots--item-2", ["slots--item-3"]]]
        },
        variants: {
          color: {
            primary: {
              item: ["item--color--primary-1", ["item--color--primary-2", ["item--color--primary-3"]]]
            }
          }
        }
      });

      const { root, item } = menu({ color: "primary" });

      expect(root()).toHaveClass(["base--styles-1", "base--styles-2", "base--styles-3"]);
      expect(item()).toHaveClass([
        "slots--item-1",
        "slots--item-2",
        "slots--item-3",
        "item--color--primary-1",
        "item--color--primary-2",
        "item--color--primary-3"
      ]);
    });

    test("without variants", () => {
      // * THIS NEEDS TO WORK!!!
      const h1 = sva({
        slots: {
          root: "text-3xl font-bold"
        }
      });

      const expectedResult = "text-3xl font-bold";
      const { root } = h1();

      expect(root()).toBe(expectedResult);
    });

    test("with variants", () => {
      const h1 = sva({
        slots: {
          root: "font-bold"
        },
        variants: {
          isBig: {
            default: {
              root: "text-3xl"
            },
            true: {
              root: "text-5xl"
            },
            false: {
              root: "text-2xl"
            }
          },
          color: {
            default: {
              root: null
            },
            red: {
              root: "text-red-500"
            },
            blue: {
              root: "text-blue-500"
            }
          }
        }
      });

      const { root } = h1({
        isBig: true,
        color: "blue"
      });

      const expectedResult = ["text-5xl", "font-bold", "text-blue-500"];

      expect(root()).toHaveClass(expectedResult);
    });

    test("with compoundVariants", () => {
      const h1 = sva({
        slots: {
          root: "font-bold"
        },
        variants: {
          isBig: {
            default: {
              root: "text-3xl"
            },
            true: {
              root: "text-5xl"
            },
            false: {
              root: "text-2xl"
            }
          },
          color: {
            red: {
              root: "text-red-500"
            },
            blue: {
              root: "text-blue-500"
            }
          }
        },
        compoundVariants: [
          {
            isBig: true,
            color: "red",
            class: {
              root: "bg-red-500"
            }
          },
          {
            isBig: [false, "default"],
            color: "red",
            class: {
              root: "underline"
            }
          }
        ]
      });

      const { root } = h1();

      expect(
        root({
          isBig: true,
          color: "red"
        })
      ).toHaveClass(["text-5xl", "font-bold", "text-red-500", "bg-red-500"]);

      expect(
        root({
          isBig: false,
          color: "red"
        })
      ).toHaveClass(["text-2xl", "font-bold", "text-red-500", "underline"]);

      expect(
        root({
          isBig: "default",
          color: "red"
        })
      ).toHaveClass(["text-3xl", "font-bold", "text-red-500", "underline"]);
    });

    test("with custom class & className", () => {
      const h1 = sva({
        slots: {
          root: "text-3xl font-bold"
        }
      });

      const expectedResult = ["text-xl", "font-bold"];

      const { root } = h1();

      const result1 = root({ className: "text-xl" });

      const result2 = root({ class: "text-xl" });

      expect(cm(result1, "text-3xl")).toHaveClass(expectedResult);
      expect(cm(result2, "text-3xl")).toHaveClass(expectedResult);
    });

    test("without anything", () => {
      // @ts-expect-error
      const noConfig = sva();
      const emptyConfig = sva({});
      const emptySlotsConfig = sva({ slots: {} });

      expect(noConfig()).toBeEmptyObject();
      expect(emptyConfig()).toBeEmptyObject();
      expect(emptySlotsConfig()).toBeEmptyObject();
    });

    test("without defaultsVariants", () => {
      const button = sva({
        slots: {
          root: "button"
        },
        variants: {
          variant: {
            primary: {
              root: "button--primary"
            },
            secondary: {
              root: "button--secondary"
            },
            warning: {
              root: "button--warning"
            },
            error: {
              root: "button--danger"
            }
          },
          isDisabled: {
            true: {
              root: "button--disabled"
            },
            false: {
              root: "button--enabled"
            }
          },
          size: {
            small: {
              root: "button--small"
            },
            medium: {
              root: "button--medium"
            },
            large: {
              root: "button--large"
            }
          }
        },
        compoundVariants: [
          {
            variant: "secondary",
            size: "small",
            class: {
              root: "button--secondary-small"
            }
          },
          {
            variant: "warning",
            isDisabled: false,
            class: {
              root: "button--warning-enabled"
            }
          },
          {
            variant: "warning",
            isDisabled: true,
            class: {
              root: "button--warning-disabled"
            }
          },
          {
            variant: ["warning", "error"],
            class: {
              root: "button--warning-danger"
            }
          },
          {
            variant: ["warning", "error"],
            size: "medium",
            class: {
              root: "button--warning-danger-medium"
            }
          }
        ]
      });

      const expectedResult = [
        "button",
        "button--secondary",
        "button--small",
        "button--enabled",
        "button--secondary-small"
      ];

      const { root } = button({ variant: "secondary", size: "small", isDisabled: false });

      expect(root()).toHaveClass(expectedResult);
    });

    test("with simple variants", () => {
      const h1 = sva({
        slots: {
          root: "text-3xl font-bold"
        },
        variants: {
          color: {
            red: {
              root: "text-red-500"
            },
            blue: {
              root: "text-blue-500"
            },
            green: {
              root: "text-green-500"
            }
          },
          isUnderline: {
            true: {
              root: "underline"
            },
            false: {
              root: "no-underline"
            }
          }
        }
      });

      const expectedResult = "text-3xl font-bold text-green-500 no-underline";
      const { root } = h1();

      expect(root({ color: "green", isUnderline: false })).toBe(expectedResult);
    });

    test("should support boolean variants", () => {
      const h1 = sva({
        slots: {
          root: "text-3xl"
        },
        variants: {
          bool: {
            true: {
              root: "underline"
            },
            false: {
              root: "truncate"
            }
          }
        }
      });

      const { root } = h1();

      expect(root()).toHaveClass(["text-3xl", "truncate"]);
      expect(root({ bool: true })).toHaveClass(["text-3xl", "underline"]);
      expect(root({ bool: false })).toHaveClass(["text-3xl", "truncate"]);
    });

    test("should support false only variant", () => {
      const h1 = sva({
        slots: {
          root: "text-3xl"
        },
        variants: {
          bool: {
            false: {
              root: "truncate"
            }
          }
        }
      });

      const { root } = h1();

      expect(root()).toHaveClass(["text-3xl", "truncate"]);
      expect(root({ bool: true })).toHaveClass(["text-3xl"]);
      expect(root({ bool: false })).toHaveClass(["text-3xl", "truncate"]);
    });

    test("should support false only variant -- default variant", () => {
      const h1 = sva({
        slots: {
          root: "text-3xl"
        },
        variants: {
          bool: {
            false: {
              root: "truncate"
            }
          }
        },
        defaultVariants: {
          bool: true
        }
      });

      const { root } = h1();

      expect(root()).toHaveClass(["text-3xl"]);
      expect(root({ bool: true })).toHaveClass(["text-3xl"]);
      expect(root({ bool: false })).toHaveClass(["text-3xl", "truncate"]);
    });

    test("should support boolean variants -- default variants", () => {
      const h1 = sva({
        slots: {
          root: "text-3xl"
        },
        variants: {
          bool: {
            true: {
              root: "underline"
            },
            false: {
              root: "truncate"
            }
          }
        },
        defaultVariants: {
          bool: true
        }
      });

      const { root } = h1();

      expect(root()).toHaveClass(["text-3xl", "underline"]);
      expect(root({ bool: true })).toHaveClass(["text-3xl", "underline"]);
      expect(root({ bool: false })).toHaveClass(["text-3xl", "truncate"]);
    });

    test("should support boolean variants -- missing false variant", () => {
      const h1 = sva({
        slots: {
          root: "text-3xl"
        },
        variants: {
          bool: {
            true: {
              root: "underline"
            }
          }
        }
      });

      const { root } = h1();

      expect(root()).toHaveClass(["text-3xl"]);
      expect(root({ bool: true })).toHaveClass(["text-3xl", "underline"]);
      expect(root({ bool: false })).toHaveClass(["text-3xl"]);
    });

    test("should support boolean variants -- missing false variant -- default variants", () => {
      const h1 = sva({
        slots: {
          root: "text-3xl"
        },
        variants: {
          bool: {
            true: {
              root: "underline"
            }
          }
        },
        defaultVariants: {
          bool: true
        }
      });

      const { root } = h1();

      expect(root()).toHaveClass(["text-3xl", "underline"]);
      expect(root({ bool: true })).toHaveClass(["text-3xl", "underline"]);
      expect(root({ bool: false })).toHaveClass(["text-3xl"]);
    });
  });

  describe("slots", () => {
    test("with empty slots", () => {
      const menu = sva({
        slots: {
          root: "",
          title: "",
          item: "",
          list: ""
        }
      });

      const { root, title, item, list } = menu();

      expect(root()).toBe("");
      expect(title()).toBe("");
      expect(item()).toBe("");
      expect(list()).toBe("");
    });

    describe("with slots", () => {
      test("default variants", () => {
        const menu = sva({
          slots: {
            root: "text-3xl font-bold underline",
            title: "text-2xl",
            item: "text-xl",
            list: "list-none",
            wrapper: "flex flex-col"
          },
          variants: {
            color: {
              primary: {
                root: "color--primary"
              },
              secondary: {
                title: "color--primary-title",
                item: "color--primary-item",
                list: "color--primary-list",
                wrapper: "color--primary-wrapper"
              }
            },
            size: {
              xs: {
                root: "size--xs"
              },
              sm: {
                root: "size--sm"
              },
              md: {
                title: "size--md-title"
              }
            },
            isDisabled: {
              true: {
                title: "disabled--title"
              },
              false: {
                item: "enabled--item"
              }
            }
          },
          defaultVariants: {
            color: "primary",
            size: "sm",
            isDisabled: false
          }
        });

        const { root, title, item, list, wrapper } = menu();

        expect(root()).toHaveClass(["text-3xl", "font-bold", "underline", "color--primary", "size--sm"]);
        expect(title()).toHaveClass(["text-2xl"]);
        expect(item()).toHaveClass(["text-xl", "enabled--item"]);
        expect(list()).toHaveClass(["list-none"]);
        expect(wrapper()).toHaveClass(["flex", "flex-col"]);
      });

      test("default variants, custom class, & className", () => {
        const menu = sva({
          slots: {
            root: "font-bold underline",
            title: "text-2xl",
            item: "text-xl",
            list: "list-none",
            wrapper: "flex flex-col"
          },
          variants: {
            color: {
              primary: {
                root: "bg-blue-500"
              },
              secondary: {
                title: "text-white",
                item: "bg-purple-100",
                list: "bg-purple-200",
                wrapper: "bg-transparent"
              }
            },
            size: {
              xs: {
                root: "text-xs"
              },
              sm: {
                root: "text-sm"
              },
              md: {
                title: "text-md"
              },
              "3xl": {
                root: "text-3xl"
              }
            },
            isDisabled: {
              true: {
                title: "opacity-50"
              },
              false: {
                item: "opacity-100"
              }
            }
          },
          defaultVariants: {
            color: "primary",
            size: "sm",
            isDisabled: false
          }
        });

        const { root, title, item, list, wrapper } = menu();

        // root - default setting from defaultVariants
        expect(cm(root({ class: "text-lg" }), "text-sm")).toHaveClass([
          "font-bold",
          "underline",
          "bg-blue-500",
          "text-lg"
        ]);
        expect(cm(root({ className: "text-lg" }), "text-sm")).toHaveClass([
          "font-bold",
          "underline",
          "bg-blue-500",
          "text-lg"
        ]);
        // title - duplicates
        expect(cm(title({ class: "text-2xl" }), "text-2xl", "text-2xl")).toHaveClass(["text-2xl"]);
        expect(cm(title({ className: "text-2xl" }), "text-2xl", "text-2xl")).toHaveClass(["text-2xl"]);
        // item
        expect(cm(item({ class: "text-sm" }), "text-xl")).toHaveClass(["text-sm", "opacity-100"]);
        expect(list({ className: "bg-blue-50" })).toHaveClass(["list-none", "bg-blue-50"]);
        // list
        expect(cm(wrapper({ class: "flex-row" }), "flex-col")).toHaveClass(["flex", "flex-row"]);
        expect(cm(wrapper({ className: "flex-row" }), "flex-col")).toHaveClass(["flex", "flex-row"]);
      });

      test("custom variants", () => {
        const menu = sva({
          slots: {
            root: "text-3xl font-bold underline",
            title: "text-2xl",
            item: "text-xl",
            list: "list-none",
            wrapper: "flex flex-col"
          },
          variants: {
            color: {
              primary: {
                root: "color--primary"
              },
              secondary: {
                root: "color--secondary-base",
                title: "color--secondary-title",
                item: "color--secondary-item",
                list: "color--secondary-list",
                wrapper: "color--secondary-wrapper"
              }
            },
            size: {
              xs: {
                root: "size--xs"
              },
              sm: {
                root: "size--sm"
              },
              md: {
                title: "size--md-title"
              }
            },
            isDisabled: {
              true: {
                title: "disabled--title"
              },
              false: {
                item: "enabled--item"
              }
            }
          },
          defaultVariants: {
            color: "primary",
            size: "sm",
            isDisabled: false
          }
        });

        const { root, title, item, list, wrapper } = menu({
          color: "secondary",
          size: "md"
        });

        expect(root()).toHaveClass(["text-3xl", "font-bold", "underline", "color--secondary-base"]);
        expect(title()).toHaveClass(["text-2xl", "size--md-title", "color--secondary-title"]);
        expect(item()).toHaveClass(["text-xl", "color--secondary-item", "enabled--item"]);
        expect(list()).toHaveClass(["list-none", "color--secondary-list"]);
        expect(wrapper()).toHaveClass(["flex", "flex-col", "color--secondary-wrapper"]);
      });

      test("custom variants, custom class, & className", () => {
        const menu = sva({
          slots: {
            root: "text-3xl font-bold underline",
            title: "text-2xl",
            item: "text-xl",
            list: "list-none",
            wrapper: "flex flex-col"
          },
          variants: {
            color: {
              primary: {
                root: "bg-blue-500"
              },
              secondary: {
                title: "text-white",
                item: "bg-purple-100",
                list: "bg-purple-200",
                wrapper: "bg-transparent"
              }
            },
            size: {
              xs: {
                root: "text-xs"
              },
              sm: {
                root: "text-sm"
              },
              md: {
                root: "text-md",
                title: "text-md"
              }
            },
            isDisabled: {
              true: {
                title: "opacity-50"
              },
              false: {
                item: "opacity-100"
              }
            }
          },
          defaultVariants: {
            color: "primary",
            size: "sm",
            isDisabled: false
          }
        });

        const { root, title, item, list, wrapper } = menu({
          color: "secondary",
          size: "md"
        });

        // base
        expect(cm(root({ class: "text-xl" }), ["text-3xl", "text-md"])).toHaveClass([
          "text-xl",
          "font-bold",
          "underline"
        ]);
        expect(cm(root({ className: "text-xl" }), ["text-3xl", "text-md"])).toHaveClass([
          "text-xl",
          "font-bold",
          "underline"
        ]);
        // title
        expect(cm(title({ class: "text-2xl" }), ["text-2xl", "text-md"], "text-2xl")).toHaveClass([
          "text-2xl",
          "text-white"
        ]);
        expect(cm(title({ className: "text-2xl" }), ["text-2xl", "text-md"], "text-2xl")).toHaveClass([
          "text-2xl",
          "text-white"
        ]);
        //item
        expect(cm(item({ class: "bg-purple-50" }), "bg-purple-100")).toHaveClass([
          "text-xl",
          "bg-purple-50",
          "opacity-100"
        ]);
        expect(cm(item({ className: "bg-purple-50" }), "bg-purple-100")).toHaveClass([
          "text-xl",
          "bg-purple-50",
          "opacity-100"
        ]);
        // list
        expect(cm(list({ class: "bg-purple-100" }), "bg-purple-200")).toHaveClass(["list-none", "bg-purple-100"]);
        expect(cm(list({ className: "bg-purple-100" }), "bg-purple-200")).toHaveClass(["list-none", "bg-purple-100"]);
        // wrapper
        expect(cm(wrapper({ class: "bg-purple-900 flex-row" }), ["bg-transparent", "flex-col"])).toHaveClass([
          "flex",
          "bg-purple-900",
          "flex-row"
        ]);
        expect(cm(wrapper({ className: "bg-purple-900 flex-row" }), ["bg-transparent", "flex-col"])).toHaveClass([
          "flex",
          "bg-purple-900",
          "flex-row"
        ]);
      });

      test("compoundVariants", () => {
        const menu = sva({
          slots: {
            root: "text-3xl font-bold underline",
            title: "text-2xl",
            item: "text-xl",
            list: "list-none",
            wrapper: "flex flex-col"
          },
          variants: {
            color: {
              primary: {
                root: "color--primary"
              },
              secondary: {
                root: "color--secondary-base",
                title: "color--secondary-title",
                item: "color--secondary-item",
                list: "color--secondary-list",
                wrapper: "color--secondary-wrapper"
              }
            },
            size: {
              xs: {
                root: "size--xs"
              },
              sm: {
                root: "size--sm"
              },
              md: {
                title: "size--md-title"
              }
            },
            isDisabled: {
              true: {
                title: "disabled--title"
              },
              false: {
                item: "enabled--item"
              }
            }
          },
          defaultVariants: {
            color: "primary",
            size: "sm",
            isDisabled: false
          },
          compoundVariants: [
            {
              color: "secondary",
              size: "md",
              class: {
                root: "compound--base",
                title: "compound--title",
                item: "compound--item",
                list: "compound--list",
                wrapper: "compound--wrapper"
              }
            }
          ]
        });

        const { root, title, item, list, wrapper } = menu({
          color: "secondary",
          size: "md"
        });

        expect(root()).toHaveClass(["text-3xl", "font-bold", "underline", "color--secondary-base", "compound--base"]);
        expect(title()).toHaveClass(["text-2xl", "size--md-title", "color--secondary-title", "compound--title"]);
        expect(item()).toHaveClass(["text-xl", "color--secondary-item", "enabled--item", "compound--item"]);
        expect(list()).toHaveClass(["list-none", "color--secondary-list", "compound--list"]);
        expect(wrapper()).toHaveClass(["flex", "flex-col", "color--secondary-wrapper", "compound--wrapper"]);
      });
    });

    describe("slot level variant", () => {
      test("overrides", () => {
        const menu = sva({
          slots: {
            root: "text-3xl",
            title: "text-2xl"
          },
          variants: {
            color: {
              primary: {
                root: "color--primary-base",
                title: "color--primary-title"
              },
              secondary: {
                root: "color--secondary-base",
                title: "color--secondary-title"
              }
            }
          },
          defaultVariants: {
            color: "primary"
          }
        });

        const { root, title } = menu();

        expect(root()).toHaveClass(["text-3xl", "color--primary-base"]);
        expect(title()).toHaveClass(["text-2xl", "color--primary-title"]);
        expect(root({ color: "secondary" })).toHaveClass(["text-3xl", "color--secondary-base"]);
        expect(title({ color: "secondary" })).toHaveClass(["text-2xl", "color--secondary-title"]);
      });

      test("overrides with compoundSlots", () => {
        const menu = sva({
          slots: {
            root: "text-3xl",
            title: "text-2xl",
            subtitle: "text-xl"
          },
          variants: {
            color: {
              primary: {
                root: "color--primary-base",
                title: "color--primary-title",
                subtitle: "color--primary-subtitle"
              },
              secondary: {
                root: "color--secondary-base",
                title: "color--secondary-title",
                subtitle: "color--secondary-subtitle"
              }
            }
          },
          compoundSlots: [
            {
              slots: ["title", "subtitle"],
              color: "secondary",
              class: ["truncate"]
            }
          ],
          defaultVariants: {
            color: "primary"
          }
        });

        const { root, title, subtitle } = menu();

        expect(root()).toHaveClass(["text-3xl", "color--primary-base"]);
        expect(title()).toHaveClass(["text-2xl", "color--primary-title"]);
        expect(subtitle()).toHaveClass(["text-xl", "color--primary-subtitle"]);
        expect(root({ color: "secondary" })).toHaveClass(["text-3xl", "color--secondary-base"]);
        expect(title({ color: "secondary" })).toHaveClass(["text-2xl", "color--secondary-title", "truncate"]);
        expect(subtitle({ color: "secondary" })).toHaveClass(["text-xl", "color--secondary-subtitle", "truncate"]);
      });

      test("with array variants overrides & compoundSlots", () => {
        const menu = sva({
          slots: {
            root: "flex flex-wrap",
            cursor: ["absolute", "flex", "overflow-visible"]
          },
          variants: {
            size: {
              xs: {},
              sm: {}
            }
          },
          compoundSlots: [
            {
              slots: ["root"],
              size: ["xs", "sm"],
              class: "w-7 h-7 text-xs"
            }
          ]
        });

        const { root, cursor } = menu();

        expect(root()).toEqual("flex flex-wrap");
        expect(root({ size: "xs" })).toEqual("flex flex-wrap w-7 h-7 text-xs");
        expect(root({ size: "sm" })).toEqual("flex flex-wrap w-7 h-7 text-xs");
        expect(cursor()).toEqual("absolute flex overflow-visible");
      });
    });

    test("should not override the default classes when the variant doesn't match - compoundSlots", () => {
      const tabs = sva({
        slots: {
          root: "inline-flex",
          tabList: ["flex"],
          tab: ["z-0", "w-full", "px-3", "py-1", "flex", "group", "relative"],
          tabContent: ["relative", "z-10", "text-inherit", "whitespace-nowrap"],
          cursor: ["absolute", "z-0", "bg-white"],
          panel: ["py-3", "px-1", "outline-none"]
        },
        variants: {
          variant: {
            solid: {},
            light: {},
            underlined: {},
            bordered: {}
          },
          color: {
            default: {},
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            danger: {}
          },
          size: {
            sm: {
              tabList: "rounded-md",
              tab: "h-7 text-xs rounded-sm",
              cursor: "rounded-sm"
            },
            md: {
              tabList: "rounded-md",
              tab: "h-8 text-sm rounded-sm",
              cursor: "rounded-sm"
            },
            lg: {
              tabList: "rounded-lg",
              tab: "h-9 text-md rounded-md",
              cursor: "rounded-md"
            }
          },
          radius: {
            none: {
              tabList: "rounded-none",
              tab: "rounded-none",
              cursor: "rounded-none"
            },
            sm: {
              tabList: "rounded-md",
              tab: "rounded-sm",
              cursor: "rounded-sm"
            },
            md: {
              tabList: "rounded-md",
              tab: "rounded-sm",
              cursor: "rounded-sm"
            },
            lg: {
              tabList: "rounded-lg",
              tab: "rounded-md",
              cursor: "rounded-md"
            },
            full: {
              tabList: "rounded-full",
              tab: "rounded-full",
              cursor: "rounded-full"
            }
          }
        },
        defaultVariants: {
          color: "default",
          variant: "solid",
          size: "md"
        },
        compoundSlots: [
          {
            variant: "underlined",
            slots: ["tab", "tabList", "cursor"],
            class: ["rounded-none"]
          }
        ]
      });

      const { tab, tabList, cursor } = tabs();

      expect(tab()).toHaveClass([
        "z-0",
        "w-full",
        "px-3",
        "py-1",
        "h-8",
        "flex",
        "group",
        "relative",
        "text-sm",
        "rounded-sm"
      ]);
      expect(tabList()).toHaveClass(["flex", "rounded-md"]);
      expect(cursor()).toHaveClass(["absolute", "z-0", "bg-white", "rounded-sm"]);
    });

    test("should override the default classes when the variant matches - compoundSlots", () => {
      const tabs = sva({
        slots: {
          root: "inline-flex",
          tabList: ["flex"],
          tab: ["z-0", "w-full", "px-3", "py-1", "flex", "group", "relative"],
          tabContent: ["relative", "z-10", "text-inherit", "whitespace-nowrap"],
          cursor: ["absolute", "z-0", "bg-white"],
          panel: ["py-3", "px-1", "outline-none"]
        },
        variants: {
          variant: {
            solid: {},
            light: {},
            underlined: {},
            bordered: {}
          },
          color: {
            default: {},
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            danger: {}
          },
          size: {
            sm: {
              tabList: "rounded-md",
              tab: "h-7 text-xs rounded-sm",
              cursor: "rounded-sm"
            },
            md: {
              tabList: "rounded-md",
              tab: "h-8 text-sm rounded-sm",
              cursor: "rounded-sm"
            },
            lg: {
              tabList: "rounded-lg",
              tab: "h-9 text-md rounded-md",
              cursor: "rounded-md"
            }
          },
          radius: {
            none: {
              tabList: "rounded-none",
              tab: "rounded-none",
              cursor: "rounded-none"
            },
            sm: {
              tabList: "rounded-md",
              tab: "rounded-sm",
              cursor: "rounded-sm"
            },
            md: {
              tabList: "rounded-md",
              tab: "rounded-sm",
              cursor: "rounded-sm"
            },
            lg: {
              tabList: "rounded-lg",
              tab: "rounded-md",
              cursor: "rounded-md"
            },
            full: {
              tabList: "rounded-full",
              tab: "rounded-full",
              cursor: "rounded-full"
            }
          }
        },
        defaultVariants: {
          color: "default",
          variant: "solid",
          size: "md"
        },
        compoundSlots: [
          {
            variant: "underlined",
            slots: ["tab", "tabList", "cursor"],
            class: ["rounded-none"]
          }
        ]
      });

      const { tab, tabList, cursor } = tabs({ variant: "underlined" });

      expect(cm(tab(), "rounded-sm")).toHaveClass([
        "z-0",
        "w-full",
        "px-3",
        "py-1",
        "h-8",
        "flex",
        "group",
        "relative",
        "text-sm",
        "rounded-none"
      ]);
      expect(cm(tabList(), "rounded-md")).toHaveClass(["flex", "rounded-none"]);
      expect(cm(cursor(), "rounded-sm")).toHaveClass(["absolute", "z-0", "bg-white", "rounded-none"]);
    });

    test("overrides - compoundVariants", () => {
      const menu = sva({
        slots: {
          root: "text-3xl",
          title: "text-2xl"
        },
        variants: {
          color: {
            primary: {
              root: "color--primary-base",
              title: "color--primary-title"
            },
            secondary: {
              root: "color--secondary-base",
              title: "color--secondary-title"
            }
          }
        },
        compoundVariants: [
          {
            color: "secondary",
            class: {
              title: "truncate"
            }
          }
        ],
        defaultVariants: {
          color: "primary"
        }
      });

      const { root, title } = menu();

      expect(root()).toHaveClass(["text-3xl", "color--primary-base"]);
      expect(title()).toHaveClass(["text-2xl", "color--primary-title"]);
      expect(root({ color: "secondary" })).toHaveClass(["text-3xl", "color--secondary-base"]);
      expect(title({ color: "secondary" })).toHaveClass(["text-2xl", "color--secondary-title", "truncate"]);
    });
  });

  describe("compound slots", () => {
    test("without variants", () => {
      const pagination = sva({
        slots: {
          root: "flex flex-wrap relative gap-1 max-w-fit",
          item: "",
          prev: "",
          next: "",
          cursor: ["absolute", "flex", "overflow-visible"]
        },
        compoundSlots: [
          {
            slots: ["item", "prev", "next"],
            class: ["flex", "flex-wrap", "truncate"]
          }
        ]
      });

      const { root, item, prev, next, cursor } = pagination();

      expect(root()).toHaveClass(["flex", "flex-wrap", "relative", "gap-1", "max-w-fit"]);
      expect(item()).toHaveClass(["flex", "flex-wrap", "truncate"]);
      expect(prev()).toHaveClass(["flex", "flex-wrap", "truncate"]);
      expect(next()).toHaveClass(["flex", "flex-wrap", "truncate"]);
      expect(cursor()).toHaveClass(["absolute", "flex", "overflow-visible"]);
    });

    describe("single variant", () => {
      test("defaultVariants", () => {
        const pagination = sva({
          slots: {
            root: "flex flex-wrap relative gap-1 max-w-fit",
            item: "",
            prev: "",
            next: "",
            cursor: ["absolute", "flex", "overflow-visible"]
          },
          variants: {
            size: {
              xs: {},
              sm: {},
              md: {},
              lg: {},
              xl: {}
            }
          },
          compoundSlots: [
            {
              slots: ["item", "prev", "next"],
              class: ["flex", "flex-wrap", "truncate"]
            },
            {
              slots: ["item", "prev", "next"],
              size: "xs",
              class: "w-7 h-7 text-xs"
            }
          ],
          defaultVariants: {
            size: "xs"
          }
        });

        const { root, item, prev, next, cursor } = pagination();

        expect(root()).toHaveClass(["flex", "flex-wrap", "relative", "gap-1", "max-w-fit"]);
        expect(item()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(prev()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(next()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(cursor()).toHaveClass(["absolute", "flex", "overflow-visible"]);
      });

      test("prop variant", () => {
        const pagination = sva({
          slots: {
            root: "flex flex-wrap relative gap-1 max-w-fit",
            item: "",
            prev: "",
            next: "",
            cursor: ["absolute", "flex", "overflow-visible"]
          },
          variants: {
            size: {
              xs: {},
              sm: {},
              md: {},
              lg: {},
              xl: {}
            }
          },
          compoundSlots: [
            {
              slots: ["item", "prev", "next"],
              class: ["flex", "flex-wrap", "truncate"]
            },
            {
              slots: ["item", "prev", "next"],
              size: "xs",
              class: "w-7 h-7 text-xs"
            }
          ],
          defaultVariants: {
            size: "sm"
          }
        });

        const { root, item, prev, next, cursor } = pagination({
          size: "xs"
        });

        expect(root()).toHaveClass(["flex", "flex-wrap", "relative", "gap-1", "max-w-fit"]);
        expect(item()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(prev()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(next()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(cursor()).toHaveClass(["absolute", "flex", "overflow-visible"]);
      });

      test("boolean variant", () => {
        const nav = sva({
          slots: {
            root: "base",
            toggle: "slot--toggle",
            item: "slot--item"
          },
          variants: {
            isActive: {
              true: {
                root: ""
              }
            }
          },
          compoundSlots: [
            {
              slots: ["item", "toggle"],
              class: "compound--item-toggle"
            },
            {
              slots: ["item", "toggle"],
              isActive: true,
              class: "compound--item-toggle--active"
            }
          ]
        });

        let styles = nav({ isActive: false });

        expect(styles.root()).toHaveClass(["base"]);
        expect(styles.toggle()).toHaveClass(["slot--toggle", "compound--item-toggle"]);
        expect(styles.item()).toHaveClass(["slot--item", "compound--item-toggle"]);

        styles = nav({ isActive: true });

        expect(styles.root()).toHaveClass(["base"]);
        expect(styles.toggle()).toHaveClass(["slot--toggle", "compound--item-toggle", "compound--item-toggle--active"]);
        expect(styles.item()).toHaveClass(["slot--item", "compound--item-toggle", "compound--item-toggle--active"]);
      });
    });

    describe("multiple variants", () => {
      test("defaultVariants", () => {
        const pagination = sva({
          slots: {
            root: "flex flex-wrap relative gap-1 max-w-fit",
            item: "",
            prev: "",
            next: "",
            cursor: ["absolute", "flex", "overflow-visible"]
          },
          variants: {
            size: {
              xs: {},
              sm: {},
              md: {},
              lg: {},
              xl: {}
            },
            color: {
              primary: {},
              secondary: {}
            },
            isBig: {
              true: {}
            }
          },
          compoundSlots: [
            {
              slots: ["item", "prev", "next"],
              class: ["flex", "flex-wrap", "truncate"]
            },
            {
              slots: ["item", "prev", "next"],
              size: "xs",
              color: "primary",
              isBig: false,
              class: "w-7 h-7 text-xs"
            }
          ],
          defaultVariants: {
            size: "xs",
            color: "primary",
            isBig: false
          }
        });

        const { root, item, prev, next, cursor } = pagination();

        expect(root()).toHaveClass(["flex", "flex-wrap", "relative", "gap-1", "max-w-fit"]);
        expect(item()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(prev()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(next()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(cursor()).toHaveClass(["absolute", "flex", "overflow-visible"]);
      });

      test("prop variants", () => {
        const pagination = sva({
          slots: {
            root: "flex flex-wrap relative gap-1 max-w-fit",
            item: "",
            prev: "",
            next: "",
            cursor: ["absolute", "flex", "overflow-visible"]
          },
          variants: {
            size: {
              xs: {},
              sm: {},
              md: {},
              lg: {},
              xl: {}
            },
            color: {
              primary: {},
              secondary: {}
            },
            isBig: {
              true: {}
            }
          },
          compoundSlots: [
            {
              slots: ["item", "prev", "next"],
              class: ["flex", "flex-wrap", "truncate"]
            },
            {
              slots: ["item", "prev", "next"],
              size: "xs",
              color: "primary",
              isBig: true,
              class: "w-7 h-7 text-xs"
            }
          ],
          defaultVariants: {
            size: "sm",
            color: "secondary",
            isBig: false
          }
        });

        const { root, item, prev, next, cursor } = pagination({
          size: "xs",
          color: "primary",
          isBig: true
        });

        expect(root()).toHaveClass(["flex", "flex-wrap", "relative", "gap-1", "max-w-fit"]);
        expect(item()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(prev()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(next()).toHaveClass(["flex", "flex-wrap", "truncate", "w-7", "h-7", "text-xs"]);
        expect(cursor()).toHaveClass(["absolute", "flex", "overflow-visible"]);
      });
    });
  });
});
