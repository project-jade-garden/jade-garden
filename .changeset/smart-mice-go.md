---
"unplugin-jade-garden": minor
"jade-garden": minor
---

## **Breaking Changes**

The primary updates simplify the packages for specific development intention.

If you are a app/product developer that is focused on building type-safe UI components that adheres to a consistent design system, use `jade-garden`.

If you ara a UI/UX engineer that is focused on creating a UI Library or a shareable design system for front-end developers, use `unplugin-jade-garden`.

### `jade-garden`

- Removes `CVATraits`, `SVATraits`, `rawCVA`, `rawSVA`, and `traits`.
- Refactors `defineSVA` to require `_slots` (`readonly string[]`) as input.

```ts
const cardSlots = ["content", "footer", "header"] as const;
type CardSlots = typeof cardSlots[number];

// Before
defineSVA<CardSlots>()({
  slots: { ... },
  variants: { ... }
});

// After
defineSVA(cardSlots)({
  slots: { ... },
  variants: { ... }
});
```

### `unplugin-jade-garden`

- Moves `CVATraits`, `SVATraits`, `rawCVA`, `rawSVA`, and `traits` here.
- Removes `rawCVA` and `rawSVA` and refactors to single function: `getClasses`.
  - `getClasses` takes in either `JadeGarden.CVAConfig` or `JadeGarden.SVAConfig`.
  - Utilizes [function overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads) for defining separate, explicit contracts for each valid input type.
- Exports the above as **helpers** (`unplugin-jade-garden/helpers`).
