<script lang="ts">
import { Toggle } from "bits-ui";
import LockKeyOpen from "phosphor-svelte/lib/LockKeyOpen";

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let unlocked = $state(false);
const code = $derived(unlocked ? "B1T5" : "••••");
</script>
 
<div>
  <div
    class="font-alt text-end text-[19px] tracking-[13.87px] {unlocked
      ? 'text-foreground'
      : 'text-muted-foreground'}"
  >
    {code}
  </div>
  <Toggle.Root
    aria-label="toggle code visibility"
   
    bind:pressed={unlocked}
  >
    <LockKeyOpen />
  </Toggle.Root>
</div>