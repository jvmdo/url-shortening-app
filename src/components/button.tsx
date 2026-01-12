import React from "react";

import { Button as BaseButton } from "@base-ui/react";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  className,
  ...delegated
}: React.ComponentProps<"button">) {
  return (
    <BaseButton
      {...delegated}
      type="button"
      className={twMerge(
        "block w-50 h-14 rounded-full text-xl bg-primary text-white font-bold hover:bg-primary-hover",
        className
      )}
    >
      {children}
    </BaseButton>
  );
}

export default Button;
