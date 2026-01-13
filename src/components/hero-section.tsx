import Button from "@/components/button";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

function HeroSection({ className, ...delegated }: ComponentProps<"div">) {
  return (
    <div
      {...delegated}
      className={twMerge("overflow-x-clip overflow-y-visible", className)}
    >
      {/* 40% is a magic number that makes <img/> matches its position in design */}
      <section className="md:grid md:items-center md:gap-6 md:grid-cols-[auto_40%] lg:gap-12 xl:gap-18">
        {/* 132vw is a magic number that makes <img/> matches its size in design */}
        <div className="w-[132vw] max-w-150 mx-auto md:max-w-none md:order-2 md:justify-self-auto">
          <img
            src="/images/illustration-working.svg"
            alt="Illustration of a man working from home on his desk with a computer"
          />
        </div>
        <div className="">
          <hgroup className="text-center text-balance mb-8 mt-12 md:text-start">
            <h1 className="text-[2.625rem] text-body font-bold leading-12 mb-3">
              More than just shorter links
            </h1>
            <p className="text-muted">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
          </hgroup>
          <Button className="mx-auto">Get Started</Button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
