<script lang="ts">
import { Label, RadioGroup } from "bits-ui";
</script>
 
<RadioGroup.Root>
  <div
   
  >
    <RadioGroup.Item
      id="amazing"
      value="amazing"
     
    />
    <Label.Root for="amazing">Amazing</Label.Root>
  </div>
  <div
   
  >
    <RadioGroup.Item
      id="average"
      value="average"
     
    />
    <Label.Root for="average">Average</Label.Root>
  </div>
  <div
   
  >
    <RadioGroup.Item
      id="terrible"
      value="terrible"
     
    />
    <Label.Root for="terrible">Terrible</Label.Root>
  </div>
</RadioGroup.Root>