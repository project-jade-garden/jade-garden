<script lang="ts">
import { Tooltip } from "bits-ui";
import MagicWand from "phosphor-svelte/lib/MagicWand";
</script>

<Tooltip.Provider>
  <Tooltip.Root delayDuration={200}>
    <Tooltip.Trigger
      class="border-border-input bg-background-alt shadow-btn ring-dark ring-offset-background
    hover:bg-muted focus-visible:ring-dark focus-visible:ring-offset-background focus-visible:outline-hidden inline-flex size-10 items-center justify-center rounded-full border focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <MagicWand />
    </Tooltip.Trigger>
    <Tooltip.Content sideOffset={8}>
      <div>
        Make some magic!
      </div>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>