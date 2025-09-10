import { describe, expect, test } from "bun:test";
import { twMerge as tm } from "tailwind-merge";
import { cn, createSVA, type MergeFn } from "../../src";

describe("createSVA", () => {
  describe("fileFormat", () => {
    describe("css", () => {
      const sva = createSVA({ fileFormat: "css" });

      test("should generate slot class name with prefix and default case convention", () => {
        const component = sva({
          name: "button",
          slots: {
            root: "root-class",
            inner: "inner-class"
          }
        });

        const slots = component();
        expect(slots.root()).toBe("button--root");
        expect(slots.inner()).toBe("button--inner");
      });

      test("should generate slot variant class name with prefix and default case convention", () => {
        const component = sva({
          name: "button",
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            }
          }
        });

        const slots = component({ size: "small" });
        expect(slots.root()).toBe("button--root button--root__size--small");
      });

      test("should generate slot class name with custom case convention", () => {
        const component = sva({
          name: "myButton",
          slots: { root: "root-class" }
        });

        const slots = component();
        expect(slots.root()).toBe("my-button--root");
      });

      test("should generate class name with compound variants", () => {
        const component = sva({
          name: "button",
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            },
            variant: {
              primary: { root: "variant-primary" },
              secondary: { root: "variant-secondary" }
            }
          },
          compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
        });

        const slots = component({ size: "small", variant: "primary" });
        expect(slots.root()).toBe("button--root button--root__size--small button--root__variant--primary");
      });

      test("should return empty string if name is not defined", () => {
        const component = sva({
          slots: { root: "root-class" }
        });

        const slots = component();
        expect(slots.root()).toBe("");
      });
    });

    describe("js/ts", () => {
      const sva = createSVA();

      test("should generate slot class name with prefix and default case convention", () => {
        const component = sva({
          name: "button",
          slots: {
            root: "root-class",
            inner: "inner-class"
          }
        });

        const slots = component();
        expect(slots.root()).toBe("root-class");
        expect(slots.inner()).toBe("inner-class");
      });

      test("should generate slot variant class name with prefix and default case convention", () => {
        const component = sva({
          name: "button",
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            }
          }
        });

        const slots = component({ size: "small" });
        expect(slots.root()).toBe("root-class size-small");
      });

      test("should generate slot class name with custom case convention", () => {
        const component = sva({
          name: "myButton",
          slots: { root: "root-class" }
        });

        const slots = component();
        expect(slots.root()).toBe("root-class");
      });

      test("should generate class name with compound variants", () => {
        const component = sva({
          name: "button",
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            },
            variant: {
              primary: { root: "variant-primary" },
              secondary: { root: "variant-secondary" }
            }
          },
          compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
        });

        const slots = component({ size: "small", variant: "primary" });
        expect(slots.root()).toBe("root-class size-small variant-primary compound-small-primary");
      });

      test("should return empty string if name is not defined", () => {
        const component = sva({
          slots: { root: "root-class" }
        });

        const slots = component();
        expect(slots.root()).toBe("root-class");
      });
    });
  });

  describe("mergeFn", () => {
    describe("cn", () => {
      const sva = createSVA({ mergeFn: cn });

      test("should return a function that returns an object of slot functions", () => {
        const result = sva({ slots: { root: "root-class" } });
        expect(typeof result).toBe("function");
        const slotFunctions = result({});
        expect(typeof slotFunctions.root).toBe("function");
      });

      test("should apply slot base classes", () => {
        const result = sva({ slots: { root: "root-class" } });
        const slotFunctions = result({});
        expect(slotFunctions.root()).toBe("root-class");
      });

      test("should apply slot variant classes", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            }
          }
        });
        const slotFunctions = components({ size: "small" });
        expect(slotFunctions.root()).toBe("root-class size-small");
      });

      test("should apply default slot variant classes", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            }
          },
          defaultVariants: { size: "medium" }
        });
        const slotFunctions = components({});
        expect(slotFunctions.root()).toBe("root-class size-medium");
      });

      test("should apply compound variant classes to slots", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            },
            variant: {
              primary: { root: "variant-primary" },
              secondary: { root: "variant-secondary" }
            }
          },
          compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
        });
        const slotFunctions = components({ size: "small", variant: "primary" });
        expect(slotFunctions.root()).toBe("root-class size-small variant-primary compound-small-primary");
      });

      test("should apply compound slot classes", () => {
        const components = sva({
          slots: { root: "root-class", inner: "inner-class" },
          variants: {
            size: {
              small: { root: "size-small", inner: "size-inner-small" },
              medium: { root: "size-medium", inner: "size-inner-medium" }
            }
          },
          compoundSlots: [{ slots: ["root", "inner"], size: "small", class: "compound-slot-small" }]
        });
        const slotFunctions = components({ size: "small" });
        expect(slotFunctions.root()).toBe("root-class size-small compound-slot-small");
        expect(slotFunctions.inner()).toBe("inner-class size-inner-small compound-slot-small");
      });

      test("should merge class and className props for slots", () => {
        const components = sva({ slots: { root: "root-class" } });
        const slotFunctions = components({});
        // @ts-expect-error
        expect(slotFunctions.root({ class: "extra-class", className: "another-class" })).toBe(
          "root-class extra-class another-class"
        );
      });
    });

    describe("cx - default", () => {
      const sva = createSVA();

      test("should return a function that returns an object of slot functions", () => {
        const result = sva({ slots: { root: "root-class" } });
        expect(typeof result).toBe("function");
        const slotFunctions = result({});
        expect(typeof slotFunctions.root).toBe("function");
      });

      test("should apply slot base classes", () => {
        const result = sva({ slots: { root: "root-class" } });
        const slotFunctions = result({});
        expect(slotFunctions.root()).toBe("root-class");
      });

      test("should apply slot variant classes", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            }
          }
        });
        const slotFunctions = components({ size: "small" });
        expect(slotFunctions.root()).toBe("root-class size-small");
      });

      test("should apply default slot variant classes", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            }
          },
          defaultVariants: { size: "medium" }
        });
        const slotFunctions = components({});
        expect(slotFunctions.root()).toBe("root-class size-medium");
      });

      test("should apply compound variant classes to slots", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            },
            variant: {
              primary: { root: "variant-primary" },
              secondary: { root: "variant-secondary" }
            }
          },
          compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
        });
        const slotFunctions = components({ size: "small", variant: "primary" });
        expect(slotFunctions.root()).toBe("root-class size-small variant-primary compound-small-primary");
      });

      test("should apply compound slot classes", () => {
        const components = sva({
          slots: { root: "root-class", inner: "inner-class" },
          variants: {
            size: {
              small: { root: "size-small", inner: "size-inner-small" },
              medium: { root: "size-medium", inner: "size-inner-medium" }
            }
          },
          compoundSlots: [{ slots: ["root", "inner"], size: "small", class: "compound-slot-small" }]
        });
        const slotFunctions = components({ size: "small" });
        expect(slotFunctions.root()).toBe("root-class size-small compound-slot-small");
        expect(slotFunctions.inner()).toBe("inner-class size-inner-small compound-slot-small");
      });

      test("should merge class and className props for slots", () => {
        const components = sva({ slots: { root: "root-class" } });
        const slotFunctions = components({});
        // @ts-expect-error
        expect(slotFunctions.root({ class: "extra-class", className: "another-class" })).toBe(
          "root-class extra-class another-class"
        );
      });

      test("should handle deeply nested arrays and objects within slots", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            style: {
              complex: {
                root: ["complex-style-1", ["complex-style-2", { "complex-style-3": true }]]
              }
            }
          }
        });
        const slotFunctions = components({ style: "complex" });
        expect(slotFunctions.root()).toBe("root-class complex-style-1 complex-style-2 complex-style-3");
      });
    });

    describe("twMerge", () => {
      const sva = createSVA({ mergeFn: tm as MergeFn });

      test("should return a function that returns an object of slot functions", () => {
        const result = sva({ slots: { root: "root-class" } });
        expect(typeof result).toBe("function");
        const slotFunctions = result({});
        expect(typeof slotFunctions.root).toBe("function");
      });

      test("should apply slot base classes", () => {
        const result = sva({ slots: { root: "root-class" } });
        const slotFunctions = result({});
        expect(slotFunctions.root()).toBe("root-class");
      });

      test("should apply slot variant classes", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            }
          }
        });
        const slotFunctions = components({ size: "small" });
        expect(slotFunctions.root()).toBe("root-class size-small");
      });

      test("should apply default slot variant classes", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            }
          },
          defaultVariants: { size: "medium" }
        });
        const slotFunctions = components({});
        expect(slotFunctions.root()).toBe("root-class size-medium");
      });

      test("should apply compound variant classes to slots", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            size: {
              small: { root: "size-small" },
              medium: { root: "size-medium" }
            },
            variant: {
              primary: { root: "variant-primary" },
              secondary: { root: "variant-secondary" }
            }
          },
          compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
        });
        const slotFunctions = components({ size: "small", variant: "primary" });
        expect(slotFunctions.root()).toBe("root-class size-small variant-primary compound-small-primary");
      });

      test("should apply compound slot classes", () => {
        const components = sva({
          slots: { root: "root-class", inner: "inner-class" },
          variants: {
            size: {
              small: { root: "size-small", inner: "size-inner-small" },
              medium: { root: "size-medium", inner: "size-inner-medium" }
            }
          },
          compoundSlots: [{ slots: ["root", "inner"], size: "small", class: "compound-slot-small" }]
        });
        const slotFunctions = components({ size: "small" });
        expect(slotFunctions.root()).toBe("root-class size-small compound-slot-small");
        expect(slotFunctions.inner()).toBe("inner-class size-inner-small compound-slot-small");
      });

      test("should merge class and className props for slots", () => {
        const components = sva({ slots: { root: "root-class" } });
        const slotFunctions = components({});
        // @ts-expect-error
        expect(slotFunctions.root({ class: "extra-class", className: "another-class" })).toBe(
          "root-class extra-class another-class"
        );
      });

      test("should correctly merge and remove duplicate tailwind classes within slots", () => {
        const components = sva({
          slots: { root: "root-class" },
          variants: {
            style: {
              merged: {
                root: "text-3xl font-bold text-blue-400 text-xl text-blue-200"
              }
            }
          }
        });
        const slotFunctions = components({ style: "merged" });
        expect(slotFunctions.root()).toBe("root-class font-bold text-xl text-blue-200");

        const complexTailwind = sva({
          slots: { root: "root-class" },
          variants: {
            style: {
              mergedComplex: {
                root: "p-4 m-2 p-2 m-1 flex items-center flex-col"
              }
            }
          }
        });
        const slotFunctionsComplex = complexTailwind({ style: "mergedComplex" });
        expect(slotFunctionsComplex.root()).toBe("root-class p-2 m-1 flex items-center flex-col");
      });
    });
  });
});
