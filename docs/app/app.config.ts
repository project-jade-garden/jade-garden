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
  }
});
