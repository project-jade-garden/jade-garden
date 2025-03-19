<script lang="ts">
import { Combobox } from "bits-ui";
import CaretDoubleDown from "phosphor-svelte/lib/CaretDoubleDown";
import CaretDoubleUp from "phosphor-svelte/lib/CaretDoubleUp";
import CaretUpDown from "phosphor-svelte/lib/CaretUpDown";
import Check from "phosphor-svelte/lib/Check";
import OrangeSlice from "phosphor-svelte/lib/OrangeSlice";

const fruits = [
  { value: "mango", label: "Mango" },
  { value: "watermelon", label: "Watermelon" },
  { value: "apple", label: "Apple" },
  { value: "pineapple", label: "Pineapple" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "strawberry", label: "Strawberry" },
  { value: "banana", label: "Banana" },
  { value: "kiwi", label: "Kiwi" },
  { value: "peach", label: "Peach" },
  { value: "cherry", label: "Cherry" },
  { value: "blueberry", label: "Blueberry" },
  { value: "raspberry", label: "Raspberry" },
  { value: "blackberry", label: "Blackberry" },
  { value: "plum", label: "Plum" },
  { value: "apricot", label: "Apricot" },
  { value: "pear", label: "Pear" },
  { value: "grapefruit", label: "Grapefruit" }
];

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let searchValue = $state("");

const filteredFruits = $derived(
  searchValue === "" ? fruits : fruits.filter((fruit) => fruit.label.toLowerCase().includes(searchValue.toLowerCase()))
);
</script>

<Combobox.Root
  type="multiple"
  name="favoriteFruit"
  onOpenChange={(o) => {
    if (!o) searchValue = "";
  }}
>
  <div>
    <OrangeSlice />
    <Combobox.Input
      oninput={(e) => (searchValue = e.currentTarget.value)}
      placeholder="Search a fruit"
      aria-label="Search a fruit"
    />
    <Combobox.Trigger >
      <CaretUpDown  />
    </Combobox.Trigger>
  </div>
  <Combobox.Portal>
    <Combobox.Content sideOffset={10}>
      <Combobox.ScrollUpButton>
        <CaretDoubleUp  />
      </Combobox.ScrollUpButton>
      <Combobox.Viewport >
        {#each filteredFruits as fruit, i (i + fruit.value)}
          <Combobox.Item
            value={fruit.value}
            label={fruit.label}
          >
            {#snippet children({ selected })}
              {fruit.label}
              {#if selected}
                <div >
                  <Check />
                </div>
              {/if}
            {/snippet}
          </Combobox.Item>
        {:else}
          <span >
            No results found, try again.
          </span>
        {/each}
      </Combobox.Viewport>
      <Combobox.ScrollDownButton>
        <CaretDoubleDown  />
      </Combobox.ScrollDownButton>
    </Combobox.Content>
  </Combobox.Portal>
</Combobox.Root>