<script lang="ts">
import { Collapsible } from "bits-ui";
import CaretUpDown from "phosphor-svelte/lib/CaretUpDown";
</script>

<Collapsible.Root >
  <div >
    <h4 >@huntabyte starred 3 repositories</h4>
    <Collapsible.Trigger
      aria-label="Show starred repositories"
    >
      <CaretUpDown  />
    </Collapsible.Trigger>
  </div>
  <Collapsible.Content>
    <div>
      @huntabyte/bits-ui
    </div>
    <div>
      @huntabyte/shadcn-svelte
    </div>
    <div>
      @svecosystem/runed
    </div>
  </Collapsible.Content>
</Collapsible.Root>