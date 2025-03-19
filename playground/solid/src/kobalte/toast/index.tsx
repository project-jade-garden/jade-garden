import { Toast, toaster } from "@kobalte/core/toast";
import { CrossIcon } from "lucide-solid";
import { Portal } from "solid-js/web";

export const Basic = () => {
  let id: number;
  const showToast = () => {
    id = toaster.show((props) => (
      <Toast toastId={props.toastId} class="toast">
        <div class="toast__content">
          <div>
            <Toast.Title class="toast__title">Event has been created</Toast.Title>
            <Toast.Description class="toast__description">Monday, January 3rd at 6:00pm</Toast.Description>
          </div>
          <Toast.CloseButton class="toast__close-button">
            <CrossIcon />
          </Toast.CloseButton>
        </div>
        <Toast.ProgressTrack class="toast__progress-track">
          <Toast.ProgressFill class="toast__progress-fill" />
        </Toast.ProgressTrack>
      </Toast>
    ));
  };
  const updateToast = () => {
    toaster.update(id, (props) => (
      <Toast toastId={props.toastId} class="toast">
        <div class="toast__content">
          <div>
            <Toast.Title class="toast__title">Event has been updated</Toast.Title>
            <Toast.Description class="toast__description">Friday, January 7th at 10:00pm</Toast.Description>
          </div>
          <Toast.CloseButton class="toast__close-button">
            <CrossIcon />
          </Toast.CloseButton>
        </div>
        <Toast.ProgressTrack class="toast__progress-track">
          <Toast.ProgressFill class="toast__progress-fill" />
        </Toast.ProgressTrack>
      </Toast>
    ));
  };
  return (
    <>
      <button onClick={showToast} type="button">
        Show toast
      </button>
      <button onClick={updateToast} type="button">
        Update toast
      </button>
      <Portal>
        <Toast.Region>
          <Toast.List class="toast__list" />
        </Toast.Region>
      </Portal>
    </>
  );
};
