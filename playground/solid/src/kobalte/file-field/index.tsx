import { FileField } from "@kobalte/core/file-field";

export const Basic = () => {
  return (
    <FileField
      multiple
      maxFiles={5}
      onFileAccept={(data) => console.log("data", data)}
      onFileReject={(data) => console.log("data", data)}
      onFileChange={(data) => console.log("data", data)}
    >
      <FileField.Label>File Field</FileField.Label>
      <FileField.Dropzone>
        Drop your files here...
        <FileField.Trigger>Choose files!</FileField.Trigger>
      </FileField.Dropzone>
      <FileField.HiddenInput />
      <FileField.ItemList>
        {(file) => (
          <FileField.Item>
            <FileField.ItemPreviewImage />
            <FileField.ItemName />
            <FileField.ItemSize />
            <FileField.ItemDeleteTrigger>Delete</FileField.ItemDeleteTrigger>
          </FileField.Item>
        )}
      </FileField.ItemList>
    </FileField>
  );
};
