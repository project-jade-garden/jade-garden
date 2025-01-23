import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { XIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24
});

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.toastStyledSlots, park: park.toastStyledSlots, shadcn: shadcn.toastStyledSlots },
    theme
  );

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          toaster.create({
            title: "Toast Title",
            description: "Toast Description",
            type: "info"
          })
        }
      >
        Add Toast
      </button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger>
              <XIcon />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toaster>
    </div>
  );
};
