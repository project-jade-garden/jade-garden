import { FileUpload } from "@ark-ui/react/file-upload";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithDirectoryUpload = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.fileUploadStyles, park: park.fileUploadStyles, shadcn: shadcn.fileUploadStyles },
    theme
  );

  return (
    <FileUpload.Root directory className={clsx(styledSlots.root)}>
      <FileUpload.Trigger className={clsx(styledSlots.trigger)}>Upload Folder</FileUpload.Trigger>
      <FileUpload.ItemGroup className={clsx(styledSlots.itemGroup)}>
        <FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUpload.Item key={file.name} file={file} className={clsx(styledSlots.item)}>
                <FileUpload.ItemName className={clsx(styledSlots.itemName)}>
                  {file.webkitRelativePath ?? file.name}
                </FileUpload.ItemName>
              </FileUpload.Item>
            ))
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};
