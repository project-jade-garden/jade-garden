<script lang="ts">
import { AlertDialog } from "bits-ui";
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>
    Subscribe
  </AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content>
      <div >
        <AlertDialog.Title >
          Confirm your transaction
        </AlertDialog.Title>
        <AlertDialog.Description >
          This action cannot be undone. This will initiate a monthly wire in the
          amount of $10,000 to Huntabyte. Do you wish to continue?
        </AlertDialog.Description>
      </div>
      <div >
        <AlertDialog.Cancel>
          Cancel
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          Continue
        </AlertDialog.Action>
      </div>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>