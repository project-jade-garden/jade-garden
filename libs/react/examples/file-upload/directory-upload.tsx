import { FileUpload } from "@ark-ui/react/file-upload";
import { fileUploadStyledSlots as minimal } from "@spark-css/theme-minimal";
import { fileUploadStyledSlots as park } from "@spark-css/theme-park";
import { fileUploadStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithDirectoryUpload = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

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
