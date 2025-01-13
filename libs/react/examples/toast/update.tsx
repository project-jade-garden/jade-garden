import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { toastStyledSlots as minimal } from "@spark-css/theme-minimal";
import { toastStyledSlots as park } from "@spark-css/theme-park";
import { toastStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useRef } from "react";
import { type Theme, getTheme } from "../utils";

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24
});

export const Update = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
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
