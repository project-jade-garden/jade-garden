/**
 * @typedef { import("tailwindcss").Config} Config
 * @type { Partial<Config> }
 */
module.exports = {
  theme: {
    extend: {
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
    }
  }
};
