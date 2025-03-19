<script lang="ts">
import { ToggleGroup } from "bits-ui";
import TextB from "phosphor-svelte/lib/TextB";
import TextItalic from "phosphor-svelte/lib/TextItalic";
import TextStrikethrough from "phosphor-svelte/lib/TextStrikethrough";

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let value: string[] = $state(["bold"]);
</script>

<ToggleGroup.Root
  bind:value
  type="multiple">
  <ToggleGroup.Item
    aria-label="toggle bold"
    value="bold"
   
  >
    <TextB />
  </ToggleGroup.Item>
  <ToggleGroup.Item
    aria-label="toggle italic"
    value="italic"
   
  >
    <TextItalic />
  </ToggleGroup.Item>
  <ToggleGroup.Item
    aria-label="toggle strikethrough"
    value="strikethrough"
   
  >
    <TextStrikethrough />
  </ToggleGroup.Item>
</ToggleGroup.Root>