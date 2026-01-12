import React from "react";

import Button from "@/components/button";
import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";

function ShortenItForm() {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  return (
    <Form
      className="w-full p-6 flex flex-wrap gap-y-4 gap-x-6 rounded-lg form-bg-image bg-primary-dark sm:p-8 md:p-10 lg:px-14 lg:py-12 xl:px-16 xl:py-13"
      errors={errors}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get("url") as string;

        setLoading(true);
        const response = await submitForm(value);
        const serverErrors = {
          url: response.error,
        };

        setErrors(serverErrors);
        setLoading(false);
      }}
    >
      <Field.Root
        name="url"
        className="grow-4 basis-100 flex flex-col items-start gap-1"
      >
        <Field.Control
          type="url"
          required
          placeholder="Shorten a link here..."
          pattern="https?://.*"
          className="w-full h-12 pl-4 rounded-md bg-white placeholder:text-muted placeholder:text-sm sm:h-13 md:h-14 lg:h-15 lg:rounded-lg xl:h-16"
        />
        <Field.Error className="text-sm text-red-800" />
      </Field.Root>
      <Button
        type="submit"
        disabled={loading}
        className="grow basis-25 h-12 text-base rounded-md data-disabled:text-gray-500 sm:h-13 md:h-14 lg:h-15 lg:rounded-lg xl:h-16"
      >
        Shorten It!
      </Button>
    </Form>
  );
}

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

export default ShortenItForm;
