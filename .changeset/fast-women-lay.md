---
"jade-garden": patch
"unplugin-jade-garden": patch
---

- Fixes exports.
- Fixes existing bug where internal types in `jade-garden` were moved to the `JadeGarden` namespace.
  - This failed to generate the namespace in `.dts` files.
