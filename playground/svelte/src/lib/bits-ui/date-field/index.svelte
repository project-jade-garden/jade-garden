<script lang="ts">
import { DateField } from "bits-ui";
</script>

<DateField.Root>
  <div >
    <DateField.Label>Birthday</DateField.Label>
    <DateField.Input>
      {#snippet children({ segments })}
        {#each segments as { part, value }}
          <div >
            {#if part === "literal"}
              <DateField.Segment {part} >
                {value}
              </DateField.Segment>
            {:else}
              <DateField.Segment {part}>
                {value}
              </DateField.Segment>
            {/if}
          </div>
        {/each}
      {/snippet}
    </DateField.Input>
  </div>
</DateField.Root>