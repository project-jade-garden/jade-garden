import { FileUpload } from "@ark-ui/react/file-upload";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { FileIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { type Theme, getTheme } from "../utils";

interface FieldValues {
  files: File[];
}

export const WithFormRegister = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.fileUpload, park: park.fileUpload, shadcn: shadcn.fileUpload },
    theme
  );
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FileUpload.Root maxFiles={5} className={clsx(styledSlots.root)}>
        <FileUpload.Label className={clsx(styledSlots.label)}>File Upload</FileUpload.Label>
        <FileUpload.Dropzone className={clsx(styledSlots.dropzone)}>Drag your file(s) here</FileUpload.Dropzone>
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
        <FileUpload.HiddenInput {...register("files")} />
      </FileUpload.Root>

      <button type="submit">Submit</button>
    </form>
  );
};
