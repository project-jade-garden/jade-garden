import { FileUpload } from "@ark-ui/react/file-upload";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithAcceptedFileTypes = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.fileUpload, park: park.fileUpload, shadcn: shadcn.fileUpload },
    theme
  );

  return (
    <FileUpload.Root accept="image/png" className={clsx(styledSlots.root)}>
      <FileUpload.Trigger className={clsx(styledSlots.trigger)}>Select Files</FileUpload.Trigger>
      <FileUpload.ItemGroup className={clsx(styledSlots.itemGroup)}>
        <FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUpload.Item key={file.name} file={file} className={clsx(styledSlots.item)}>
                <FileUpload.ItemName className={clsx(styledSlots.itemName)} />
              </FileUpload.Item>
            ))
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};
