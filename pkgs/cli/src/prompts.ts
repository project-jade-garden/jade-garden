import * as p from "@clack/prompts";
import color from "picocolors";

export type Prompts = {
  tw: "v3" | "v4";
  lang: "ts" | "js";
  ui: "react" | "solid" | "vue";
  theme: "minimal" | "park" | "shadcn";
  util: "tv" | "tm" | "clsx";
  path: string;
};

export const prompts = async () =>
  p.group(
    {
      tw: () =>
        p.select({
          message: "What version of Tailwind are you using?",
          initialValue: "v3",
          options: [
            { value: "v3", label: "v3" },
            {
              value: "v4",
              label: "v4",
              hint: `Upgrade guide: ${color.underline(color.cyan("https://tailwindcss.com/docs/upgrade-guide"))}`
            }
          ]
        }),
      lang: () =>
        p.select({
          message: "Pick your project's language.",
          initialValue: "ts",
          options: [
            { value: "ts", label: "TypeScript" },
            { value: "js", label: "JavaScript" }
          ]
        }),
      ui: () =>
        p.select({
          message: "Select a JS framework for Ark UI.",
          initialValue: "react",
          options: [
            { value: "react", label: "React" },
            { value: "solid", label: "Solid" },
            { value: "vue", label: "Vue" }
          ]
        }),
      theme: () =>
        p.select({
          message: "Select a Spark CSS theme.",
          initialValue: "minimal",
          options: [
            {
              value: "minimal",
              label: "Minimal",
              hint: `${color.bgBlack(color.yellow("[WARN]: Minimal theme contains no styles. Use if you feel confident starting from scratch."))}`
            },
            { value: "park", label: "Park UI" },
            { value: "shadcn", label: "Shadcn UI" }
          ]
        }),
      util: () =>
        p.select({
          message: "Select a Tailwind utility.",
          initialValue: "tv",
          options: [
            {
              value: "tv",
              label: "tailwind-variants",
              hint: "Highly recommended for styling components with lots of variations."
            },
            {
              value: "tm",
              label: "tailwind-merge",
              hint: "Recommended if you don't want to worry about style conflicts."
            },
            { value: "clsx", label: "clsx", hint: "Recommended for managing strings or array of strings." }
          ]
        }),
      path: () =>
        p.text({
          message: "Where do you want your components?",
          placeholder: "./src/components",
          validate: (value) => {
            if (!value) return "Please enter a path.";
            if (value[0] !== ".") return "Please enter a relative path.";
          }
        })
    },
    {
      onCancel: () => {
        p.cancel("Operation cancelled.");
        process.exit(0);
      }
    }
  ) as Promise<Prompts>;
