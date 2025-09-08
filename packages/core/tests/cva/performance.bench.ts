import Benchmark from "benchmark";
import { cva } from "class-variance-authority";
import { cva as cvaBeta } from "cva";
import { tv } from "tailwind-variants";
import { tv as tvLite } from "tailwind-variants/lite";
import { cva as jgCva } from "../../src";

const cvaSuite = new Benchmark.Suite("cva");

cvaSuite
  .add("class-variance-authority", () => {
    const { avatar, fallback, image } = {
      avatar: cva("relative flex shrink-0 overflow-hidden rounded-full", {
        variants: {
          size: {
            xs: "h-6 w-6",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-14 w-14"
          }
        },
        defaultVariants: {
          size: "md"
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
      }),
      image: cva("aspect-square h-full w-full", {
        variants: {
          withBorder: {
            true: "border-1.5 border-white"
          }
        }
      }),
      fallback: cva("flex h-full w-full items-center justify-center rounded-full bg-muted", {
        variants: {
          size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
            xl: "text-xl"
          }
        },
        defaultVariants: {
          size: "md"
        }
      })
    };

    avatar({ size: "md" });
    fallback();
    image();
  })
  .add("cva", () => {
    const { avatar, fallback, image } = {
      avatar: cvaBeta({
        base: "relative flex shrink-0 overflow-hidden rounded-full",
        variants: {
          size: {
            xs: "h-6 w-6",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-14 w-14"
          }
        },
        defaultVariants: {
          size: "md"
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
      }),
      image: cvaBeta({
        base: "aspect-square h-full w-full",
        variants: {
          withBorder: {
            true: "border-1.5 border-white"
          }
        }
      }),
      fallback: cvaBeta({
        base: "flex h-full w-full items-center justify-center rounded-full bg-muted",
        variants: {
          size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
            xl: "text-xl"
          }
        },
        defaultVariants: {
          size: "md"
        }
      })
    };

    avatar({ size: "md" });
    fallback();
    image();
  })
  .add("jade-garden cva", () => {
    const { avatar, fallback, image } = {
      avatar: jgCva({
        base: "relative flex shrink-0 overflow-hidden rounded-full",
        variants: {
          size: {
            xs: "h-6 w-6",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-14 w-14"
          }
        },
        defaultVariants: {
          size: "md"
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
      }),
      image: jgCva({
        base: "aspect-square h-full w-full",
        variants: {
          withBorder: {
            true: "border-1.5 border-white"
          }
        }
      }),
      fallback: jgCva({
        base: "flex h-full w-full items-center justify-center rounded-full bg-muted",
        variants: {
          size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
            xl: "text-xl"
          }
        },
        defaultVariants: {
          size: "md"
        }
      })
    };

    avatar({ size: "md" });
    fallback();
    image();
  })
  .add("tailwind-variants w/o slots", () => {
    const { avatar, fallback, image } = {
      avatar: tv({
        base: "relative flex shrink-0 overflow-hidden rounded-full",
        variants: {
          size: {
            xs: "h-6 w-6",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-14 w-14"
          }
        },
        defaultVariants: {
          size: "md"
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
      }),
      image: tv({
        base: "aspect-square h-full w-full",
        variants: {
          withBorder: {
            true: "border-1.5 border-white"
          }
        }
      }),
      fallback: tv({
        base: "flex h-full w-full items-center justify-center rounded-full bg-muted",
        variants: {
          size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
            xl: "text-xl"
          }
        },
        defaultVariants: {
          size: "md"
        }
      })
    };

    avatar({ size: "md" });
    fallback();
    image();
  })
  .add("tailwind-variants/lite w/o slots", () => {
    const { avatar, fallback, image } = {
      avatar: tvLite({
        base: "relative flex shrink-0 overflow-hidden rounded-full",
        variants: {
          size: {
            xs: "h-6 w-6",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-14 w-14"
          }
        },
        defaultVariants: {
          size: "md"
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
      }),
      image: tv({
        base: "aspect-square h-full w-full",
        variants: {
          withBorder: {
            true: "border-1.5 border-white"
          }
        }
      }),
      fallback: tv({
        base: "flex h-full w-full items-center justify-center rounded-full bg-muted",
        variants: {
          size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
            xl: "text-xl"
          }
        },
        defaultVariants: {
          size: "md"
        }
      })
    };

    avatar({ size: "md" });
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
    console.log(`Fastest 'cva' operation is ${this.filter("fastest").map("name")}`);
  })
  // run async
  .run({ async: true });
