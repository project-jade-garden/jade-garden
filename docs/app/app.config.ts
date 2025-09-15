export default defineAppConfig({
  github: {
    url: "https://github.com/project-jade-garden/jade-garden",
    branch: "main",
    rootDir: "docs"
  },
  seo: {
    // @ts-expect-error: This is a valid property - https://www.docus.dev/en/concepts/configuration#metadata
    titleTemplate: ""
  },
  ui: {
    colors: {
      error: "persian-pink",
      info: "shallow-lagoon",
      neutral: "olive-gray",
      primary: "moonstone-blue",
      secondary: "caribbean-green",
      success: "pyrenees-mountain",
      warning: "ripe-lemon"
    }
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "Community",
      links: [
        {
          icon: "i-ph-shooting-star-duotone",
          label: "Star on GitHub",
          to: "https://github.com/project-jade-garden/jade-garden",
          target: "_blank"
        },
        {
          icon: "i-ph-chat-centered-text-duotone",
          label: "Start a Discussion",
          to: "https://github.com/project-jade-garden/jade-garden/discussions",
          target: "_blank"
        },
        {
          icon: "ph:scroll-duotone",
          label: "View Changelog",
          to: "https://github.com/project-jade-garden/jade-garden/releases",
          target: "_blank"
        }
      ]
    }
  }
});
