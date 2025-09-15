---
seo:
  title: Jade Garden
  description: Tools for developing with Headless Design Systems.
  ogImage: www.jade-garden.org/og.png
---

::u-page-hero
---
class: "[&>div]:gap-0"
reverse: true
---
  :::full-brand
  :::

#links
  :::u-button
  ---
  size: xl
  to: /getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-lucide-star
  size: xl
  target: _blank
  to: https://github.com/project-jade-garden/jade-garden
  variant: subtle
  ---
  Star on GitHub
  :::
::

::u-page-section
#title
Get the most out of building :br [your design system]{.text-primary}

#features
  :::card
  ---
  class: "m-0"
  icon: ph:handshake-duotone
  title: Stable
  to: /getting-started/essentials
  ---
  Features that match Class Variance Authority and Tailwind Variants including enhancements.

  :::

  :::card
  ---
  class: "m-0"
  icon: ph:speedometer-duotone
  title: Performant
  to: /getting-started/introduction#comparisons
  ---
  Faster execution speed than Class Variance Authority and **double** than Tailwind Variants.
  :::

  :::card
  ---
  class: "m-0"
  icon: ph:number-circle-zero-duotone
  title: Zero Dependencies
  to: /getting-started/essentials#class-utils
  ---
  Includes class utilities with similar functionality to `clsx` and optimized runtime performance.
  :::

  :::card
  ---
  class: "m-0"
  icon: simple-icons:typescript
  title: TypeScript Support
  to: /getting-started/essentials#typescript
  ---
  Enjoy a fully typed development experience that enhances modularity of a design system.
  :::

  :::card
  ---
  class: "m-0"
  icon: simple-icons:javascript
  title: Framework Agnostic
  to: /getting-started/installation
  ---
  All functions in Jade Garden generate strings and can be used wherever JavaScript can run.
  :::

  :::card
  ---
  class: "m-0"
  icon: simple-icons:tailwindcss
  title: Generate CSS
  to: /advanced/unplugin-jade-garden
  ---
  Use `unplugin-jade-garden` to expand portability of your design system.
  :::
::
