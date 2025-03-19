<script lang="ts">
import { Select } from "bits-ui";
import CaretDoubleDown from "phosphor-svelte/lib/CaretDoubleDown";
import CaretDoubleUp from "phosphor-svelte/lib/CaretDoubleUp";
import CaretUpDown from "phosphor-svelte/lib/CaretUpDown";
import Check from "phosphor-svelte/lib/Check";
import Palette from "phosphor-svelte/lib/Palette";

const themes = [
  { value: "light-monochrome", label: "Light Monochrome" },
  { value: "dark-green", label: "Dark Green" },
  { value: "svelte-orange", label: "Svelte Orange" },
  { value: "punk-pink", label: "Punk Pink" },
  { value: "ocean-blue", label: "Ocean Blue", disabled: true },
  { value: "sunset-red", label: "Sunset Red" },
  { value: "forest-green", label: "Forest Green" },
  { value: "lavender-purple", label: "Lavender Purple", disabled: true },
  { value: "mustard-yellow", label: "Mustard Yellow" },
  { value: "slate-gray", label: "Slate Gray" },
  { value: "neon-green", label: "Neon Green" },
  { value: "coral-reef", label: "Coral Reef" },
  { value: "midnight-blue", label: "Midnight Blue" },
  { value: "crimson-red", label: "Crimson Red" },
  { value: "mint-green", label: "Mint Green" },
  { value: "pastel-pink", label: "Pastel Pink" },
  { value: "golden-yellow", label: "Golden Yellow" },
  { value: "deep-purple", label: "Deep Purple" },
  { value: "turquoise-blue", label: "Turquoise Blue" },
  { value: "burnt-orange", label: "Burnt Orange" }
];

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let value = $state<string>("");
const selectedLabel = $derived(value ? themes.find((theme) => theme.value === value)?.label : "Select a theme");
</script>

<Select.Root type="single" onValueChange={(v) => {value = v;}} items={themes}>
  <Select.Trigger
   
    aria-label="Select a theme"
  >
    <Palette />
    {selectedLabel}
    <CaretUpDown />
  </Select.Trigger>
  <Select.Portal>
    <Select.Content
     
      sideOffset={10}
    >
      <Select.ScrollUpButton>
        <CaretDoubleUp />
      </Select.ScrollUpButton>
      <Select.Viewport>
        {#each themes as theme, i (i + theme.value)}
          <Select.Item
           
            value={theme.value}
            label={theme.label}
            disabled={theme.disabled}
          >
            {#snippet children({ selected })}
              {theme.label}
              {#if selected}
                <div>
                  <Check />
                </div>
              {/if}
            {/snippet}
          </Select.Item>
        {/each}
      </Select.Viewport>
      <Select.ScrollDownButton>
        <CaretDoubleDown />
      </Select.ScrollDownButton>
    </Select.Content>
  </Select.Portal>
</Select.Root>