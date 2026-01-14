import type { ComponentProps } from "react";

import FooterNav from "@/components/footer-nav";
import { twMerge } from "tailwind-merge";

function Footer({ className, ...delegated }: ComponentProps<"footer">) {
  return (
    <footer
      {...delegated}
      className={twMerge("flex flex-col gap-y-10 lg:flex-row", className)}
    >
      <div className="grow mx-auto lg:mx-0">
        <a href="#" className="block w-30">
          <img
            src="/images/logo.svg"
            alt="shortly"
            className="block w-full brightness-0 invert"
          />
        </a>
      </div>
      <FooterNav className="grow flex flex-wrap gap-y-10 gap-x-2 justify-center lg:gap-x-1" />
    </footer>
  );
}

export default Footer;
