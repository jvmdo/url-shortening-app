import type { ComponentProps } from "react";

import FooterNav from "@/components/footer-nav";
import { twMerge } from "tailwind-merge";

function Footer({ className, ...delegated }: ComponentProps<"footer">) {
  return (
    <footer
      {...delegated}
      className={twMerge(
        "bg-background-dark flex flex-col gap-y-10 px-10 md:px-20 lg:flex-row xl:px-40",
        className
      )}
    >
      <div className="grow mx-auto lg:mx-0">
        <h3 className="w-30">
          <img
            src="/images/logo.svg"
            alt="shortly"
            className="block w-full brightness-0 invert"
          />
        </h3>
      </div>
      <FooterNav className="grow flex flex-wrap gap-y-10 gap-x-2 justify-center lg:gap-x-1" />
    </footer>
  );
}

export default Footer;
