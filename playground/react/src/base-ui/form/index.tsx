import { Field } from "@base-ui-components/react/field";
import { Form } from "@base-ui-components/react/form";
import * as React from "react";

export const Basic = () => {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  return (
    <Form
      errors={errors}
      onClearErrors={setErrors}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get("url") as string;

        setLoading(true);
        const response = await submitForm(value);
        const serverErrors = {
          url: response.error
        };

        setErrors(serverErrors);
        setLoading(false);
      }}
    >
      <Field.Root name="url">
        <Field.Label>Homepage</Field.Label>
        <Field.Control
          type="url"
          required
          defaultValue="https://example.com"
          placeholder="https://example.com"
          pattern="https?://.*"
        />
        <Field.Error />
      </Field.Root>
      <button disabled={loading} type="submit">
        Submit
      </button>
    </Form>
  );
};

async function submitForm(value: string) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const url = new URL(value);

    if (url.hostname.endsWith("example.com")) {
      return { error: "The example domain is not allowed" };
    }
  } catch {
    return { error: "This is not a valid URL" };
  }

  return { success: true };
}
