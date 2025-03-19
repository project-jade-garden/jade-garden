<script lang="ts">
import { Command } from "bits-ui";
import CalendarBlank from "phosphor-svelte/lib/CalendarBlank";
import CodeBlock from "phosphor-svelte/lib/CodeBlock";
import Palette from "phosphor-svelte/lib/Palette";
import RadioButton from "phosphor-svelte/lib/RadioButton";
import Sticker from "phosphor-svelte/lib/Sticker";
import Textbox from "phosphor-svelte/lib/Textbox";
</script>

<Command.Root>
  <Command.Input placeholder="Search for something..." />
  <Command.List>
    <Command.Viewport>
      <Command.Empty>
        No results found.
      </Command.Empty>
      <Command.Group>
        <Command.GroupHeading>
          Suggestions
        </Command.GroupHeading>
        <Command.GroupItems>
          <Command.Item keywords={["getting started", "tutorial"]}>
            <Sticker  />
            Introduction
          </Command.Item>
          <Command.Item keywords={["child", "custom element", "snippets"]}>
            <CodeBlock  />
            Delegation
          </Command.Item>
          <Command.Item keywords={["css", "theme", "colors", "fonts", "tailwind"]}>
            <Palette  />
            Styling
          </Command.Item>
        </Command.GroupItems>
      </Command.Group>
      <Command.Separator  />
      <Command.Group>
        <Command.GroupHeading>
          Components
        </Command.GroupHeading>
        <Command.GroupItems>
          <Command.Item keywords={["dates", "times"]}>
            <CalendarBlank  />
            Calendar
          </Command.Item>
          <Command.Item keywords={["buttons", "forms"]}>
            <RadioButton  />
            Radio Group
          </Command.Item>
          <Command.Item keywords={["inputs", "text", "autocomplete"]}>
            <Textbox />
            Combobox
          </Command.Item>
        </Command.GroupItems>
      </Command.Group>
    </Command.Viewport>
  </Command.List>
</Command.Root>