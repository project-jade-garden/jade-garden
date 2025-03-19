import { NavigationMenu, type Orientation } from "@kobalte/core/navigation-menu";
import { RadioGroup } from "@kobalte/core/radio-group";
import { ChevronDown } from "lucide-solid";
import { For, createSignal } from "solid-js";

export const Basic = () => {
  const [orientation, setOrientation] = createSignal<Orientation>("horizontal");
  return (
    <>
      <NavigationMenu class="navigation-menu__root" orientation={orientation()}>
        <NavigationMenu.Menu>
          <NavigationMenu.Trigger class="navigation-menu__trigger">
            Learn{" "}
            <NavigationMenu.Icon class="navigation-menu__trigger-indicator">
              <ChevronDown />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Portal>
            <NavigationMenu.Content class="navigation-menu__content content-1">
              <NavigationMenu.Item class="navigation-menu__item-callout" href="https://kobalte.dev">
                <img src="https://kobalte.dev/android-chrome-192x192.png" role="presentation" alt="Kobalte" />
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">Kobalte</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Unstyled, accessible components for SolidJS.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item class="navigation-menu__item" href="https://pigment.kobalte.dev">
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">Pigment</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Ready-to-use components with a consistent look and feel.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item class="navigation-menu__item" href="https://www.solidjs.com/">
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">SolidJS</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Simple and performant reactivity for building user interfaces.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item class="navigation-menu__item" href="https://start.solidjs.com/">
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">SolidStart</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Fine-grained reactivity goes fullstack.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
            </NavigationMenu.Content>
          </NavigationMenu.Portal>
        </NavigationMenu.Menu>
        <NavigationMenu.Menu>
          <NavigationMenu.Trigger class="navigation-menu__trigger">
            Overview{" "}
            <NavigationMenu.Icon class="navigation-menu__trigger-indicator">
              <ChevronDown />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Portal>
            <NavigationMenu.Content class="navigation-menu__content content-2">
              <NavigationMenu.Item
                class="navigation-menu__item"
                href="https://kobalte.dev/docs/core/overview/introduction"
              >
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">Introduction</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Build high-quality, accessible design systems and web apps.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class="navigation-menu__item"
                href="https://kobalte.dev/docs/core/overview/getting-started"
              >
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">Getting started</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  A quick tutorial to get you up and running with Kobalte.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item class="navigation-menu__item" href="https://kobalte.dev/docs/core/overview/styling">
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">Styling</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Unstyled and compatible with any styling solution.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class="navigation-menu__item"
                href="https://kobalte.dev/docs/core/overview/animation"
              >
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">Animation</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Use CSS keyframes or any animation library of your choice.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                class="navigation-menu__item"
                href="https://kobalte.dev/docs/core/overview/polymorphism"
              >
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">Polymorphism</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Customize behavior or integrate existing libraries.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item class="navigation-menu__item" href="https://kobalte.dev/docs/changelog">
                <NavigationMenu.ItemLabel class="navigation-menu__item-label">Changelog</NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="navigation-menu__item-description">
                  Kobalte releases and their changelogs.
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
            </NavigationMenu.Content>
          </NavigationMenu.Portal>
        </NavigationMenu.Menu>
        <NavigationMenu.Trigger
          class="navigation-menu__trigger"
          as="a"
          href="https://github.com/kobaltedev/kobalte"
          target="_blank"
        >
          GitHub
        </NavigationMenu.Trigger>
        <NavigationMenu.Viewport class="navigation-menu__viewport">
          <NavigationMenu.Arrow class="navigation-menu__arrow" />
        </NavigationMenu.Viewport>
      </NavigationMenu>
      <div style="height: 2rem;" />
      <RadioGroup<Orientation>
        class="radio-group"
        value={orientation()}
        onChange={(value) => setOrientation(value as Orientation)}
      >
        <RadioGroup.Label class="radio-group__label">Orientation</RadioGroup.Label>
        <div class="radio-group__items">
          <For each={["Horizontal", "Vertical"]}>
            {(orientation) => (
              <RadioGroup.Item value={orientation.toLowerCase()}>
                <RadioGroup.ItemInput class="radio__input" />
                <RadioGroup.ItemControl class="radio__control">
                  <RadioGroup.ItemIndicator class="radio__indicator" />
                </RadioGroup.ItemControl>
                <RadioGroup.ItemLabel class="radio__label">{orientation}</RadioGroup.ItemLabel>
              </RadioGroup.Item>
            )}
          </For>
        </div>
      </RadioGroup>
    </>
  );
};
