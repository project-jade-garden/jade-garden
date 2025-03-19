<script lang="ts">
import { Avatar, LinkPreview } from "bits-ui";
import CalendarBlank from "phosphor-svelte/lib/CalendarBlank";
import MapPin from "phosphor-svelte/lib/MapPin";
</script>

<LinkPreview.Root>
  <LinkPreview.Trigger
    href="https://x.com/huntabyte"
    target="_blank"
    rel="noreferrer noopener"
  >
    <Avatar.Root>
      <div>
        <Avatar.Image src="/avatar-1.png" alt="@huntabyte" />
        <Avatar.Fallback >HB</Avatar.Fallback>
      </div>
    </Avatar.Root>
  </LinkPreview.Trigger>
  <LinkPreview.Content sideOffset={8}>
    <div>
      <Avatar.Root>
        <div>
          <Avatar.Image src="/avatar-1.png" alt="@huntabyte" />
          <Avatar.Fallback >HB</Avatar.Fallback>
        </div>
      </Avatar.Root>
      <div>
        <h4>@huntabyte</h4>
        <p>I do things on the internet.</p>
        <div>
          <div >
            <MapPin />
            <span> FL, USA </span>
          </div>
          <div >
            <CalendarBlank />
            <span> Joined May 2020</span>
          </div>
        </div>
      </div>
    </div>
  </LinkPreview.Content>
</LinkPreview.Root>