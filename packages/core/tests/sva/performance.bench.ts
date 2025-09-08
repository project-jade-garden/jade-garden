import Benchmark from "benchmark";
import { tv } from "tailwind-variants";
import { tv as tvLite } from "tailwind-variants/lite";
import { sva } from "../../src";

const svaSuite = new Benchmark.Suite("sva");

svaSuite
  .add("jade-garden sva", () => {
    const { base, fallback, image } = sva({
      slots: {
        base: "relative flex shrink-0 overflow-hidden rounded-full",
        image: "aspect-square h-full w-full",
        fallback: "flex h-full w-full items-center justify-center rounded-full bg-muted"
      },
      variants: {
        withBorder: {
          true: {
            image: "border-1.5 border-white"
          }
        },
        size: {
          xs: {
            base: "h-6 w-6",
            fallback: "text-xs"
          },
          sm: {
            base: "h-8 w-8",
            fallback: "text-sm"
          },
          md: {
            base: "h-10 w-10",
            fallback: "text-base"
          },
          lg: {
            base: "h-12 w-12",
            fallback: "text-large"
          },
          xl: {
            base: "h-14 w-14",
            fallback: "text-xl"
          }
        }
      },
      defaultVariants: {
        size: "md",
        withBorder: false
      },
      compoundVariants: [
        {
          size: ["xs", "sm"],
          class: {
            base: "ring-1"
          }
        },
        {
          size: ["md", "lg", "xl"],
          class: {
            base: "ring-2"
          }
        }
      ]
    })();

    base({ size: "md" });
    fallback();
    image();
  })
  .add("tailwind-variants w/ slots", () => {
    const { base, fallback, image } = tv({
      slots: {
        base: "relative flex shrink-0 overflow-hidden rounded-full",
        image: "aspect-square h-full w-full",
        fallback: "flex h-full w-full items-center justify-center rounded-full bg-muted"
      },
      variants: {
        withBorder: {
          true: {
            image: "border-1.5 border-white"
          }
        },
        size: {
          xs: {
            base: "h-6 w-6",
            fallback: "text-xs"
          },
          sm: {
            base: "h-8 w-8",
            fallback: "text-sm"
          },
          md: {
            base: "h-10 w-10",
            fallback: "text-base"
          },
          lg: {
            base: "h-12 w-12",
            fallback: "text-large"
          },
          xl: {
            base: "h-14 w-14",
            fallback: "text-xl"
          }
        }
      },
      defaultVariants: {
        size: "md",
        withBorder: false
      },
      compoundVariants: [
        {
          size: ["xs", "sm"],
          class: "ring-1"
        },
        {
          size: ["md", "lg", "xl"],
          class: "ring-2"
        }
      ]
    })();

    base({ size: "md" });
    fallback();
    image();
  })
  .add("tailwind-variants/lite w/ slots", () => {
    const { base, fallback, image } = tvLite({
      slots: {
        base: "relative flex shrink-0 overflow-hidden rounded-full",
        image: "aspect-square h-full w-full",
        fallback: "flex h-full w-full items-center justify-center rounded-full bg-muted"
      },
      variants: {
        withBorder: {
          true: {
            image: "border-1.5 border-white"
          }
        },
        size: {
          xs: {
            base: "h-6 w-6",
            fallback: "text-xs"
          },
          sm: {
            base: "h-8 w-8",
            fallback: "text-sm"
          },
          md: {
            base: "h-10 w-10",
            fallback: "text-base"
          },
          lg: {
            base: "h-12 w-12",
            fallback: "text-large"
          },
          xl: {
            base: "h-14 w-14",
            fallback: "text-xl"
          }
        }
      },
      defaultVariants: {
        size: "md",
        withBorder: false
      },
      compoundVariants: [
        {
          size: ["xs", "sm"],
          class: "ring-1"
        },
        {
          size: ["md", "lg", "xl"],
          class: "ring-2"
        }
      ]
    })();

    base({ size: "md" });
    fallback();
    image();
  })

  // add listeners
  .on("cycle", (event: unknown) => {
    // @ts-expect-error: 'event' is of type 'unknown'
    console.log(String(event.target));
  })
  .on("complete", function () {
    // @ts-expect-error: 'this' implicitly has type 'any' because it does not have a type annotation
    console.log(`Fastest 'sva' operation is ${this.filter("fastest").map("name")}`);
  })
  // run async
  .run({ async: true });
