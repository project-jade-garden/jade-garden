import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useRef } from "react";
import { type Theme, getTheme } from "../utils";

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24
});

export const Update = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.toastStyledSlots, park: park.toastStyledSlots, shadcn: shadcn.toastStyledSlots },
    theme
  );
  const id = useRef<string>("");

  const createToast = () => {
    const toast = toaster.create({
      title: "Loading",
      description: "Loading ...",
      type: "info"
    });

    if (toast) id.current = toast;
  };

  const updateToast = () => {
    if (!id.current) return;

    toaster.update(id.current, {
      title: "Success",
      description: "Success!"
    });
  };

  return (
    <div>
      <button type="button" onClick={createToast}>
        Create Toast
      </button>
      <button type="button" onClick={updateToast}>
        Update Toast
      </button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
          </Toast.Root>
        )}
      </Toaster>
    </div>
  );
};
