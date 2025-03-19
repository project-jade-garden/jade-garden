<script lang="ts">
import { Slider } from "bits-ui";
import cn from "clsx";

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let value = $state(50);
</script>
 
<div>
  <Slider.Root
    type="single"
    bind:value
   
  >
    {#snippet children()}
      <span>
        <Slider.Range />
      </span>
      <Slider.Thumb
        index={0}
        class={cn(
          "border-border-input bg-background hover:border-dark-40 focus-visible:ring-foreground dark:bg-foreground dark:shadow-card focus-visible:outline-hidden block size-[25px] cursor-pointer rounded-full border shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
        )}
      />
    {/snippet}
  </Slider.Root>
</div>