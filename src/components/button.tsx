import React from "react";

import { Button as BaseButton } from "@base-ui/react";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  className,
  type = "button",
  ...delegated
}: React.ComponentProps<"button">) {
  return (
    <BaseButton
      {...delegated}
      type={type}
      className={twMerge(
        "block w-50 h-14 rounded-full text-xl bg-primary text-white font-bold hover:bg-primary-hover data-disabled:bg-muted transition-colors",
        className,
      )}
    >
      {children}
    </BaseButton>
  );
}

export default Button;
