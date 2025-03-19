<script lang="ts">
import { Menubar } from "bits-ui";
import CaretRight from "phosphor-svelte/lib/CaretRight";
import Cat from "phosphor-svelte/lib/Cat";
import Check from "phosphor-svelte/lib/Check";

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let selectedView = $state("table");
// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let selectedProfile = $state("pavel");

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let grids = $state([
  {
    checked: true,
    label: "Pixel"
  },
  {
    checked: false,
    label: "Layout"
  }
]);

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let showConfigs = $state([
  {
    checked: true,
    label: "Show Bookmarks"
  },
  {
    checked: false,
    label: "Show Full URLs"
  }
]);

const profiles = [
  {
    value: "hunter",
    label: "Hunter"
  },
  {
    value: "pavel",
    label: "Pavel"
  },
  {
    value: "adrian",
    label: "Adrian"
  }
];

const views = [
  {
    value: "table",
    label: "Table"
  },
  {
    value: "board",
    label: "Board"
  },
  {
    value: "gallery",
    label: "Gallery"
  }
];
</script>

<Menubar.Root>
  <div>
    <Cat />
  </div>
  <Menubar.Menu>
    <Menubar.Trigger>
      File
    </Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content
        align="start"
        sideOffset={3}
      >
        {#each grids as grid}
          <Menubar.CheckboxItem bind:checked={grid.checked}>
            {#snippet children({ checked })}
              {grid.label} grid
              <div >
                {#if checked}
                  <SwitchOn />
                {:else}
                  <SwitchOff />
                {/if}
              </div>
            {/snippet}
          </Menubar.CheckboxItem>
        {/each}
        <Menubar.Separator  />
        <Menubar.RadioGroup bind:value={selectedView}>
          {#each views as view}
            <Menubar.RadioItem value={view.value}>
              {#snippet children({ checked })}
                {view.label}
                <div>
                  {#if checked}
                    <Check />
                  {/if}
                </div>
              {/snippet}
            </Menubar.RadioItem>
          {/each}
        </Menubar.RadioGroup>
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>

  <Menubar.Menu>
    <Menubar.Trigger>
      Edit
    </Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content
        align="start"
        sideOffset={3}
      >
        <Menubar.Item>
          Undo
        </Menubar.Item>
        <Menubar.Item>
          Redo
        </Menubar.Item>
        <Menubar.Separator />
        <Menubar.Sub>
          <Menubar.SubTrigger>
            Find
            <div >
              <CaretRight  />
            </div>
          </Menubar.SubTrigger>
          <Menubar.SubContent>
            <Menubar.Item>
              Search the web
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>
              Find...
            </Menubar.Item>
            <Menubar.Item>
              Find Next
            </Menubar.Item>
            <Menubar.Item>
              Find Previous
            </Menubar.Item>
          </Menubar.SubContent>
        </Menubar.Sub>
        <Menubar.Separator />
        <Menubar.Item>
          Cut
        </Menubar.Item>
        <Menubar.Item>
          Copy
        </Menubar.Item>
        <Menubar.Item>
          Paste
        </Menubar.Item>
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger>
      View
    </Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content
        align="start"
        sideOffset={3}
      >
        {#each showConfigs as config}
          <Menubar.CheckboxItem
            bind:checked={config.checked}
          >
            {#snippet children({ checked })}
              {config.label}
              <div >
                {#if checked}
                  {@render SwitchOn()}
                {:else}
                  {@render SwitchOff()}
                {/if}
              </div>
            {/snippet}
          </Menubar.CheckboxItem>
        {/each}
        <Menubar.Separator />
        <Menubar.Item>
          Reload
        </Menubar.Item>
        <Menubar.Item>
          Force Reload
        </Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>
          Toggle Fullscreen
        </Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>
          Hide Sidebar
        </Menubar.Item>
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger>
      Profiles
    </Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content
        align="start"
        sideOffset={3}
      >
        <Menubar.RadioGroup bind:value={selectedProfile}>
          {#each profiles as profile}
            <Menubar.RadioItem value={profile.value}>
              {#snippet children({ checked })}
                {profile.label}
                <div >
                  {#if checked}
                    <Check  />
                  {/if}
                </div>
              {/snippet}
            </Menubar.RadioItem>
          {/each}
        </Menubar.RadioGroup>
        <Menubar.Separator />
        <Menubar.Item>Edit...</Menubar.Item
        >
        <Menubar.Separator />
        <Menubar.Item>Add Profile...</Menubar.Item
        >
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>
</Menubar.Root>

{#snippet SwitchOn()}
  <div>
    <span></span>
  </div>
{/snippet}

{#snippet SwitchOff()}
  <div>
    <span></span>
  </div>
{/snippet}