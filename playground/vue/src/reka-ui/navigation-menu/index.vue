<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "reka-ui";
import { ref } from "vue";
import NavigationMenuListItem from "./nav-list-item.vue";

export interface TestProps {
  disableClickTrigger?: boolean;
  disableHoverTrigger?: boolean;
}

const props = withDefaults(defineProps<TestProps>(), {
  disableClickTrigger: false,
  disableHoverTrigger: false,
});

const currentTrigger = ref("");
</script>

<template>
  <div>
    <NavigationMenuRoot v-model="currentTrigger" v-bind="props">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger> Learn </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <li>
                <NavigationMenuLink href="/" target="_blank" @select.prevent>
                  <svg
                    alt="logo"
                    aria-hidden="true"
                    width="38"
                    height="38"
                    viewBox="0 0 25 25"
                    fill="white"
                  >
                    <path
                      d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
                    />
                    <path d="M12 0H4V8H12V0Z" />
                    <path
                      d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
                    />
                  </svg>
                  <div>Reka UI</div>
                  <p>Unstyled, accessible components for Vue.</p>
                </NavigationMenuLink>
              </li>

              <NavigationMenuListItem
                href="https://stitches.dev/"
                title="Stitches"
              >
                CSS-in-JS with best-in-class developer experience.
              </NavigationMenuListItem>
              <NavigationMenuListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </NavigationMenuListItem>
              <NavigationMenuListItem
                href="https://lucide.dev/icons/"
                title="Icons"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </NavigationMenuListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger> Overview </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <NavigationMenuListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </NavigationMenuListItem>
              <NavigationMenuListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </NavigationMenuListItem>
              <NavigationMenuListItem
                title="Styling"
                href="/docs/primitives/guides/styling"
              >
                Unstyled and compatible with any styling solution.
              </NavigationMenuListItem>
              <NavigationMenuListItem
                title="Animation"
                href="/docs/primitives/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </NavigationMenuListItem>
              <NavigationMenuListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </NavigationMenuListItem>
              <NavigationMenuListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Reka UI releases and their changelogs.
              </NavigationMenuListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/unovue">
            Github
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator>
          <div />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <div>
        <NavigationMenuViewport />
      </div>
    </NavigationMenuRoot>
  </div>
</template>
