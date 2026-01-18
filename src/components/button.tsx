import React from "react";

import { Button as BaseButton } from "@base-ui/react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ComponentProps<"button"> {
  asLink?: boolean;
  href?: string;
}

function Button({
  children,
  className,
  type = "button",
  asLink = false,
  href,
  ...delegated
}: ButtonProps) {
  return (
    <BaseButton
      {...delegated}
      nativeButton={!asLink}
      type={asLink ? undefined : type}
      render={asLink ? <a href={href} /> : undefined}
      className={twMerge(
        "w-50 h-14 flex items-center justify-center rounded-full text-xl bg-primary text-white font-bold hover:bg-primary-hover data-disabled:bg-muted transition-colors",
        className,
      )}
    >
      {children}
    </BaseButton>
  );
}

export default Button;
