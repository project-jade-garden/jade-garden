<script lang="ts">
import { NavigationMenu } from "bits-ui";
import cn from "clsx";
import CaretDown from "phosphor-svelte/lib/CaretDown";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Link Preview",
    href: "/docs/components/link-preview",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll Area",
    href: "/docs/components/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];

type ListItemProps = {
  className?: string;
  title: string;
  href: string;
  content: string;
};
</script>

{#snippet ListItem({ className, title, content, href }: ListItemProps)}
  <li>
    <NavigationMenu.Link
      class={cn(
        "hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground outline-hidden block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors",
        className
      )}
      {href}
    >
      <div>{title}</div>
      <p>
        {content}
      </p>
    </NavigationMenu.Link>
  </li>
{/snippet}

<NavigationMenu.Root>
  <NavigationMenu.List
   
  >
    <NavigationMenu.Item value="getting-started">
      <NavigationMenu.Trigger>
        Getting started
        <CaretDown
         
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <ul
         
        >
          <li>
            <NavigationMenu.Link
              href="/"
             
            >
              <!-- <Icons.logo /> -->
              <div>Bits UI</div>
              <p>
                The headless components for Svelte.
              </p>
            </NavigationMenu.Link>
          </li>
          {@render ListItem({
            href: "/docs",
            title: "Introduction",
            content: "Headless components for Svelte and SvelteKit"
          })}
          {@render ListItem({
            href: "/docs/getting-started",
            title: "Getting Started",
            content: "How to install and use Bits UI"
          })}
          {@render ListItem({
            href: "/docs/styling",
            title: "Styling",
            content: "How to style Bits UI components"
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>
        Components
        <CaretDown
         
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <ul
         
        >
          {#each components as component (component.title)}
            {@render ListItem({
              href: component.href,
              title: component.title,
              content: component.description
            })}
          {/each}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link
       
        href="/docs"
      >
        <span> Documentation </span>
        <span> Docs </span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Indicator
     
    >
      <div></div>
    </NavigationMenu.Indicator>
  </NavigationMenu.List>
  <div
   
  >
    <NavigationMenu.Viewport
     
    />
  </div>
</NavigationMenu.Root>