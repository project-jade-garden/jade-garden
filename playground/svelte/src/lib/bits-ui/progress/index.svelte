<script lang="ts">
import { Progress, useId } from "bits-ui";
import { onMount } from "svelte";

let value = $state(13);
const labelId = useId();

onMount(() => {
  const timer = setTimeout(() => {
    value = 66;
  }, 500);
  return () => clearTimeout(timer);
});
</script>

<div>
  <div>
    <span id={labelId}> Uploading file... </span>
    <span>{value}%</span>
  </div>
  <Progress.Root
    aria-labelledby={labelId}
    {value}
    max={100}
   
  >
    <div
     
      style={`transform: translateX(-${100 - (100 * (value ?? 0)) / 100}%)`}
    ></div>
  </Progress.Root>
</div>