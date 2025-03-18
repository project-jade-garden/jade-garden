import * as Form from "@radix-ui/react-form";
import * as React from "react";

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Basic = () => {
  const [loading, setLoading] = React.useState(false);
  const [serverErrors, setServerErrors] = React.useState<{ email?: boolean; password?: boolean }>({});

  return (
    <>
      <Form.Root
        onClearServerErrors={() => setServerErrors({})}
        onSubmit={async (event) => {
          const form = event.currentTarget;
          event.preventDefault();

          const formData = new FormData(form);

          setLoading(true);
          await wait(500);
          setLoading(false);

          const errors = new Set();
          if (!(formData.get("email") as string).includes("@gmail.com")) errors.add("email");
          if (!(formData.get("password") as string).includes("#")) errors.add("password");

          if (errors.size > 0) {
            setServerErrors(Object.fromEntries([...errors].map((name) => [name, true])));
            return;
          }

          window.alert(JSON.stringify(Object.fromEntries(formData), null, 2));
        }}
      >
        <Form.Field name="email" serverInvalid={serverErrors.email ?? false}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required onChange={() => setServerErrors((prev) => ({ ...prev, email: false }))} />
          <Form.Message match="valueMissing" />
          <Form.Message match="typeMismatch" forceMatch={serverErrors.email ?? false}>
            Email is invalid
          </Form.Message>
        </Form.Field>

        <Form.Field name="password" serverInvalid={serverErrors.password ?? false}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={() => setServerErrors((prev) => ({ ...prev, password: false }))}
          />
          <Form.Message match="valueMissing">Password is required</Form.Message>
          <Form.Message
            match={(value) => value.match(/.*[0-9]+.*/) === null}
            forceMatch={serverErrors.password ?? false}
          >
            Password is not complex enough
          </Form.Message>
          {serverErrors.password && <Form.Message>Woops</Form.Message>}
        </Form.Field>

        <Form.Submit disabled={loading}>Submit</Form.Submit>
        <button type="reset">Reset</button>
      </Form.Root>
    </>
  );
};
