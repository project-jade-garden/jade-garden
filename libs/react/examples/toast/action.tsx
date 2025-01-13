import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { toastStyledSlots as minimal } from "@spark-css/theme-minimal";
import { toastStyledSlots as park } from "@spark-css/theme-park";
import { toastStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

const toaster = createToaster({
  placement: "bottom-end",
  gap: 24
});

export const Action = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          toaster.create({
            title: "Toast Title",
            description: "Toast Description",
            type: "info",
            action: {
              label: "Subscribe",
              onClick: () => {
                console.log("Subscribe");
              }
            }
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
            {toast.action && <Toast.ActionTrigger>{toast.action?.label}</Toast.ActionTrigger>}
          </Toast.Root>
        )}
      </Toaster>
    </div>
  );
};
