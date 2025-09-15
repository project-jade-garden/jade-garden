---
"unplugin-jade-garden": major
"jade-garden": major
---

Jade Garden has been made more simple to work with the plugins.
In addition to the component and slots functions, `cva` and `sva` carry the `styleConfig` and `metaConfig` properties.
These properties enhance the portability of style configurations while generating helpers for library authors when working with the plugins.

The `sva` function in `jade-garden` is a major breaking feature and deviates from Tailwind Variants.
The `slots` property has been repurposed to accept a `string[]` that will be responsible for generating the named slot functions and defining the properties that can be used in `base`,
the new property for defining base classes for each slot.
The purpose for this change is to provide developers complete documentation of a component's anatomy that can be carried over if using the plugins.

The plugins' introduces a new feature that generates both CSS and the style configurations.
If a developer or team is more comfortable working with design systems programmatically,
they can generate the style configurations to modify locally.
The CSS remains as an option for UI/UX library authors who want to generate style sheets,
while having the option to share the style configurations by default.

The following are breaking changes:

- `jade-garden`:
  - Removes `defineCVA`, `defineSVA`, and `getClasses`
    - `defineCVA` and `defineSVA` are obsolete now that they have been integrated into `cva` and `sva`.
    - `getClasses` has been integrated into `createCVA` and `createSVA`
  - `createCVA` and `createSVA` accepts an object as a parameter that is a shared type with `unplugin-jade-garden`
    - `mergeFn`: The optional function to merge class names, defaults to `cx`.
    - `prefix`: The prefix for the class name. Applied when `useStylesheet` is set to `true`.
    - `useStylesheet`: Determines if the component returns classes for a stylesheet or not. If `true` the class name generated is a combination of `base` and `variant` keys.
  - Renames `prefixClasses` to `prefixes`
  - `sva` **REQUIRES** `slots`
    - `slots` takes input of `string[]` that represents the full anatomy of slots for a component
    - `base` is the new name for defining base classes for each slot
    - `slots` are generates named slot functions instead of `base`
- `unplugin-jade-garden`:
  - The plugin options has dropped the `build` property
    - `cache` and `maxDepth` have been dropped
  - `styleConfigs` has been renamed to `components`
  - `classNameConfig` has been renamed to `createOptions`
    - `twPrefix` has been dropped