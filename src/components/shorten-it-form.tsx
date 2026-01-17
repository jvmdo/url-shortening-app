import React, { type ComponentProps } from "react";

import { useCreateShorten } from "@/api";
import Button from "@/components/button";
import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import psl from "psl";
import { toast } from "sonner";
import z from "zod";

const FormSchema = z.object({
  url: z
    .string()
    .min(1, { error: "Please add a link", abort: true })
    .refine(URL.canParse, {
      error: "Invalid URL structure. Include protocol and domain extension.",
      abort: true,
    })
    .transform((value) => new URL(value))
    .refine((url) => ["http:", "https:"].includes(url.protocol), {
      error: "Only HTTP/HTTPS protocols are supported.",
      abort: true,
    })
    .refine((url) => psl.isValid(url.hostname), {
      error: "URL must have a valid domain extension (e.g., .com).",
    })
    .transform(String),
});

function validateForm(formValues: Form.Values) {
  const fieldValidate = FormSchema.safeParse(formValues);

  if (!fieldValidate.success) {
    return {
      errors: z.flattenError(fieldValidate.error).fieldErrors,
    };
  }

  return {
    url: fieldValidate.data.url,
  };
}

function ShortenItForm(delegated: ComponentProps<"div">) {
  const [errors, setErrors] = React.useState({});
  const { mutate, isPending } = useCreateShorten();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formValues = new FormData(form);
    const { errors, url } = validateForm(Object.fromEntries(formValues));

    if (errors) {
      return setErrors(errors);
    }

    mutate(
      { id: crypto.randomUUID(), href: url },
      {
        onSuccess: () => {
          form.reset();
        },
        onError(error) {
          if ("corsError" in error) {
            toast.error(error.name, {
              id: "cors-error",
              description: error.message,
              action: {
                label: "Fix now",
                onClick: () =>
                  window.open("https://cors-anywhere.herokuapp.com/corsdemo"),
              },
            });
            return;
          }

          toast.error("Links in trouble", {
            id: "server-error",
            description: error.message,
          });
        },
      },
    );
  };

  return (
    <div {...delegated}>
      <Form
        className="w-full p-6 flex flex-wrap gap-y-4 gap-x-6 rounded-lg form-bg-image bg-primary-dark sm:p-8 md:p-10 lg:px-14 lg:py-12 xl:px-16 xl:py-13"
        errors={errors}
        onSubmit={handleSubmit}
      >
        <Field.Root
          name="url"
          className="grow-4 basis-100 flex flex-col items-start gap-1"
        >
          <Field.Control
            type="url"
            placeholder="Shorten a link here..."
            className="w-full h-12 pl-4 rounded-md bg-white placeholder:text-muted placeholder:text-sm sm:h-13 md:h-14 lg:h-15 lg:rounded-lg lg:placeholder:text-base xl:h-16 data-invalid:outline-error data-invalid:placeholder-error"
          />
          <Field.Error className="text-sm text-error" />
        </Field.Root>
        <Button
          type="submit"
          disabled={isPending}
          className="grow basis-25 h-12 text-base rounded-md sm:h-13 md:h-14 lg:h-15 lg:text-xl lg:rounded-lg xl:h-16"
        >
          Shorten It!
        </Button>
      </Form>
    </div>
  );
}

export default ShortenItForm;
