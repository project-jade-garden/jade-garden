<script lang="ts">
import { Checkbox, Label } from "bits-ui";
import Check from "phosphor-svelte/lib/Check";
import Minus from "phosphor-svelte/lib/Minus";
</script>

<div>
  <Checkbox.Root
    id="terms"
    aria-labelledby="terms-label"
    name="hello"
  >
    {#snippet children({ checked, indeterminate })}
      <div>
        {#if indeterminate}
          <Minus />
        {:else if checked}
          <Check />
        {/if}
      </div>
    {/snippet}
  </Checkbox.Root>
  <Label.Root
    id="terms-label"
    for="terms"
  >
    Accept terms and conditions
  </Label.Root>
</div>