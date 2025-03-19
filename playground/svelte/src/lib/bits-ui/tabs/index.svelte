<script lang="ts">
import { Tabs } from "bits-ui";
import Airplane from "phosphor-svelte/lib/Airplane";
</script>

<div>
  <Tabs.Root
    value="outbound"
   
  >
    <Tabs.List
     
    >
      <Tabs.Trigger
        value="outbound"
       
        >Outbound</Tabs.Trigger
      >
      <Tabs.Trigger
        value="inbound"
       
        >Inbound</Tabs.Trigger
      >
    </Tabs.List>
    <Tabs.Content value="outbound">
      <div>
        <div>
          <h4
           
          >
            Prague
          </h4>
          <p>06:05</p>
        </div>
        <div>
          <p>3h 30m</p>
        </div>
        <div>
          <h4
           
          >
            Malaga
          </h4>
          <p>06:05</p>
        </div>
        <div>
          <hr
           
          />

          <div>
            <Airplane />
          </div>
        </div>
      </div>
    </Tabs.Content>
    <Tabs.Content value="inbound">
      <div>
        <div>
          <h4
           
          >
            Malaga
          </h4>
          <p>07:25</p>
        </div>
        <div>
          <p>3h 20m</p>
        </div>
        <div>
          <h4
           
          >
            Prague
          </h4>
          <p>10:45</p>
        </div>
        <div>
          <hr
           
          />
 
          <div>
            <Airplane />
          </div>
        </div>
      </div>
    </Tabs.Content>
  </Tabs.Root>
</div>