<script lang="ts">
import { Accordion } from "bits-ui";
import CaretDown from "phosphor-svelte/lib/CaretDown";

const items = [
  {
    value: "1",
    title: "What is the meaning of life?",
    content: "To become a better person, to help others, and to leave the world a better place than you found it."
  },
  {
    value: "2",
    title: "How do I become a better person?",
    content: "Read books, listen to podcasts, and surround yourself with people who inspire you."
  },
  {
    value: "3",
    title: "What is the best way to help others?",
    content: "Give them your time, attention, and love."
  }
];
</script>

<Accordion.Root type="multiple">
  {#each items as item (item.value)}
    <Accordion.Item
      value={item.value}>
      <Accordion.Header>
        <Accordion.Trigger>
          <span >
            {item.title}
          </span>
          <span>
            <CaretDown  />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>
        <div >
          {item.content}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  {/each}
</Accordion.Root>