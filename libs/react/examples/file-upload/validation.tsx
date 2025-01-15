import { FileUpload } from "@ark-ui/react/file-upload";
import { fileUploadStyledSlots as minimal } from "@spark-css/theme-minimal";
import { fileUploadStyledSlots as park } from "@spark-css/theme-park";
import { fileUploadStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { FileIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const WithValidation = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <FileUpload.Root
      validate={(file) => {
        if (file.name.length > 20) return ["FILE_NAME_TOO_LONG"];
        return null;
      }}
      className={clsx(styledSlots.root)}
    >
      <FileUpload.Trigger className={clsx(styledSlots.trigger)}>Choose file(s)</FileUpload.Trigger>
      <FileUpload.ItemGroup className={clsx(styledSlots.itemGroup)}>
        <FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUpload.Item key={file.name} file={file} className={clsx(styledSlots.item)}>
                <FileUpload.ItemPreview type="image/*" className={clsx(styledSlots.itemPreview)}>
                  <FileUpload.ItemPreviewImage className={clsx(styledSlots.itemPreviewImage)} />
                </FileUpload.ItemPreview>
                <FileUpload.ItemPreview type=".*" className={clsx(styledSlots.itemPreview)}>
                  <FileIcon />
                </FileUpload.ItemPreview>
                <FileUpload.ItemName className={clsx(styledSlots.itemName)} />
                <FileUpload.ItemSizeText className={clsx(styledSlots.itemSizeText)} />
                <FileUpload.ItemDeleteTrigger className={clsx(styledSlots.itemDeleteTrigger)}>
                  X
                </FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            ))
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};
