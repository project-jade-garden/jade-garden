import { toMerged } from "es-toolkit";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const parkTheme = {
  // * Custom common animations
  animation: {
    "fade-in": "fadeIn .25s ease-out",
    "fade-out": "fadeOut .2s ease-out"
  },
  // * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/semantic-tokens/colors.ts
  colors: {
    bg: {
      canvas: "var(--colors-bg-canvas)",
      default: "var(--colors-bg-default)",
      subtle: "var(--colors-bg-subtle)",
      muted: "var(--colors-bg-muted)",
      emphasized: "var(--colors-bg-emphasized)",
      disabled: "var(--colors-bg-disabled)"
    },
    fg: {
      default: "var(--colors-fg-default)",
      muted: "var(--colors-fg-muted)",
      subtle: "var(--colors-fg-subtle)",
      disabled: "var(--colors-fg-disabled)"
    },
    accent: {
      default: "var(--colors-accent-default)",
      emphasized: "var(--colors-accent-emphasized)",
      fg: "var(--colors-accent-fg)",
      text: "var(--colors-accent-text)"
    },
    border: {
      default: "var(--colors-border-default)",
      muted: "var(--colors-border-muted)",
      subtle: "var(--colors-border-subtle)",
      disabled: "var(--colors-border-disabled)",
      outline: "var(--colors-border-outline)"
    }
  },
  // * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/semantic-tokens/radii.ts
  borderRadius: {
    l1: "var(--radii-xs)",
    l2: "var(--radii-sm)",
    l3: "var(--radii-md)"
  },
  // * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/semantic-tokens/shadows.ts
  boxShadow: {
    xs: "var(--shadows-xs)",
    sm: "var(--shadows-sm)",
    md: "var(--shadows-md)",
    lg: "var(--shadows-lg)",
    xl: "var(--shadows-xl)",
    "2xl": "var(--shadows-2xl)"
  }
};

const shadcnTheme = {
  fontFamily: {
    sans: ["var(--font-geist-sans)", ...fontFamily.sans],
    mono: ["var(--font-geist-mono)", ...fontFamily.mono]
  },
  colors: {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))"
    },
    secondary: {
      DEFAULT: "hsl(var(--secondary))",
      foreground: "hsl(var(--secondary-foreground))"
    },
    destructive: {
      DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
      foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
    },
    muted: {
      DEFAULT: "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))"
    },
    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))"
    },
    popover: {
      DEFAULT: "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))"
    },
    card: {
      DEFAULT: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))"
    },
    sidebar: {
      DEFAULT: "hsl(var(--sidebar-background))",
      foreground: "hsl(var(--sidebar-foreground))",
      primary: "hsl(var(--sidebar-primary))",
      "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
      accent: "hsl(var(--sidebar-accent))",
      "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
      border: "hsl(var(--sidebar-border))",
      ring: "hsl(var(--sidebar-ring))"
    }
  },
  borderRadius: {
    xl: "calc(var(--radius) + 4px)",
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)"
  },
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" }
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" }
    },
    "caret-blink": {
      "0%,70%,100%": { opacity: "1" },
      "20%,50%": { opacity: "0" }
    }
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "caret-blink": "caret-blink 1.25s ease-out infinite"
  }
};

const extend = toMerged(parkTheme, shadcnTheme);

export default {
  // * In a single repository project would be `./node_modules/`, but in monorepo
  content: ["../../node_modules/@spark-css/themes/**/*.{js,ts}", "./examples/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend
  }
} satisfies Config;
