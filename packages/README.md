<div align="center">
 <h1>
    <a href="https://github.com/AGS1130/project-jade-garden">
      <img alt="Jade Garden" src="../.media/jade-garden.svg" width="800">
    </a>
  </h1>
</div>

This directory is a set of tools to aid in developing with Headless Design Systems.

[`jade-garden`](./jade-garden) includes [`clsx`, `clsx/lite`, and their types](https://github.com/lukeed/clsx/tree/master?tab=readme-ov-file#modes) out of the box,
along with modified versions of [`cva`](https://beta.cva.style/) and [`tailwind-variants`](https://www.tailwind-variants.org/)
to better work with the ideas and standards of [Project Jade Garden](../docs).

[`unplugin-jade-garden`](./unplugin-jade-garden) is a plugin for your build tools that writes Tailwind CSS
[`@apply` directives](https://tailwindcss.com/docs/functions-and-directives#apply-directive) without the need to manually match classes, their props, and types.
