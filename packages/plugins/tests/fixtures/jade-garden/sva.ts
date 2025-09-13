import { createSVA } from "jade-garden/sva";

const sva = createSVA({ useStylesheet: true });

export const alertConfig = sva(
  {
    name: "alert",
    slots: {
      root: "rounded py-3 px-5 mb-4",
      title: "font-bold mb-1",
      message: ""
    },
    variants: {
      variant: {
        outlined: {
          root: "border"
        },
        filled: {
          root: ""
        }
      },
      severity: {
        error: {},
        success: {}
      },
      size: {
        xs: {},
        sm: {},
        md: {}
      }
    },
    compoundSlots: [
      {
        slots: ["root", "title", "message"],
        class: [
          "flex",
          "flex-wrap",
          "truncate",
          "box-border",
          "outline-none",
          "items-center",
          "justify-center",
          "bg-neutral-100",
          "hover:bg-neutral-200",
          "active:bg-neutral-300",
          "text-neutral-500"
        ]
      },
      {
        slots: ["root", "title", "message"],
        size: "xs",
        class: "w-7 h-7 text-xs"
      },
      {
        slots: ["root", "title", "message"],
        size: "sm",
        class: "w-8 h-8 text-sm"
      },
      {
        slots: ["root", "title", "message"],
        size: "md",
        class: "w-9 h-9 text-base"
      }
    ],
    compoundVariants: [
      {
        variant: "outlined",
        severity: "error",
        class: {
          root: "border-red-700 dark:border-red-500",
          title: "text-red-700 dark:text-red-500",
          message: "text-red-600 dark:text-red-500"
        }
      },

      {
        variant: "outlined",
        severity: "success",
        class: {
          root: "border-green-700 dark:border-green-500",
          title: "text-green-700 dark:text-green-500",
          message: "text-green-600 dark:text-green-500"
        }
      },

      {
        variant: "filled",
        severity: "error",
        class: {
          root: "bg-red-100 dark:bg-red-800",
          title: "text-red-900 dark:text-red-50",
          message: "text-red-700 dark:text-red-200"
        }
      },

      {
        variant: "filled",
        severity: "success",
        class: {
          root: "bg-green-100 dark:bg-green-800",
          title: "text-green-900 dark:text-green-50",
          message: "text-green-700 dark:text-green-200"
        }
      }
    ],
    defaultVariants: {
      variant: "filled",
      severity: "success"
    }
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    deprecated: "The quick brown fox jumps over the lazy dog",
    name: "Component",
    see: "https://www.mozilla.org/"
  }
);

export const noNameSVA = sva({
  slots: {
    root: "rounded py-3 px-5 mb-4",
    title: "font-bold mb-1",
    message: ""
  },
  variants: {
    variant: {
      outlined: {
        root: "border"
      },
      filled: {
        root: ""
      }
    },
    severity: {
      error: {},
      success: {}
    },
    size: {
      xs: {},
      sm: {},
      md: {}
    }
  },
  compoundSlots: [
    {
      slots: ["root", "title", "message"],
      class: [
        "flex",
        "flex-wrap",
        "truncate",
        "box-border",
        "outline-none",
        "items-center",
        "justify-center",
        "bg-neutral-100",
        "hover:bg-neutral-200",
        "active:bg-neutral-300",
        "text-neutral-500"
      ]
    },
    {
      slots: ["root", "title", "message"],
      size: "xs",
      class: "w-7 h-7 text-xs"
    },
    {
      slots: ["root", "title", "message"],
      size: "sm",
      class: "w-8 h-8 text-sm"
    },
    {
      slots: ["root", "title", "message"],
      size: "md",
      class: "w-9 h-9 text-base"
    }
  ],
  compoundVariants: [
    {
      variant: "outlined",
      severity: "error",
      class: {
        root: "border-red-700 dark:border-red-500",
        title: "text-red-700 dark:text-red-500",
        message: "text-red-600 dark:text-red-500"
      }
    },

    {
      variant: "outlined",
      severity: "success",
      class: {
        root: "border-green-700 dark:border-green-500",
        title: "text-green-700 dark:text-green-500",
        message: "text-green-600 dark:text-green-500"
      }
    },

    {
      variant: "filled",
      severity: "error",
      class: {
        root: "bg-red-100 dark:bg-red-800",
        title: "text-red-900 dark:text-red-50",
        message: "text-red-700 dark:text-red-200"
      }
    },

    {
      variant: "filled",
      severity: "success",
      class: {
        root: "bg-green-100 dark:bg-green-800",
        title: "text-green-900 dark:text-green-50",
        message: "text-green-700 dark:text-green-200"
      }
    }
  ],
  defaultVariants: {
    variant: "filled",
    severity: "success"
  }
});

export const noSlotsSVA = sva({
  name: "alert",
  variants: {
    variant: {
      outlined: {
        root: "border"
      },
      filled: {
        root: ""
      }
    },
    severity: {
      error: {},
      success: {}
    },
    size: {
      xs: {},
      sm: {},
      md: {}
    }
  },
  compoundSlots: [
    {
      slots: ["root", "title", "message"],
      class: [
        "flex",
        "flex-wrap",
        "truncate",
        "box-border",
        "outline-none",
        "items-center",
        "justify-center",
        "bg-neutral-100",
        "hover:bg-neutral-200",
        "active:bg-neutral-300",
        "text-neutral-500"
      ]
    },
    {
      slots: ["root", "title", "message"],
      size: "xs",
      class: "w-7 h-7 text-xs"
    },
    {
      slots: ["root", "title", "message"],
      size: "sm",
      class: "w-8 h-8 text-sm"
    },
    {
      slots: ["root", "title", "message"],
      size: "md",
      class: "w-9 h-9 text-base"
    }
  ],
  compoundVariants: [
    {
      variant: "outlined",
      severity: "error",
      class: {
        root: "border-red-700 dark:border-red-500",
        title: "text-red-700 dark:text-red-500",
        message: "text-red-600 dark:text-red-500"
      }
    },

    {
      variant: "outlined",
      severity: "success",
      class: {
        root: "border-green-700 dark:border-green-500",
        title: "text-green-700 dark:text-green-500",
        message: "text-green-600 dark:text-green-500"
      }
    },

    {
      variant: "filled",
      severity: "error",
      class: {
        root: "bg-red-100 dark:bg-red-800",
        title: "text-red-900 dark:text-red-50",
        message: "text-red-700 dark:text-red-200"
      }
    },

    {
      variant: "filled",
      severity: "success",
      class: {
        root: "bg-green-100 dark:bg-green-800",
        title: "text-green-900 dark:text-green-50",
        message: "text-green-700 dark:text-green-200"
      }
    }
  ],
  defaultVariants: {
    variant: "filled",
    severity: "success"
  }
});
