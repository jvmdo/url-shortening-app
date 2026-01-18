import Button from "@/components/button";
import type { ComponentProps } from "react";

function HeroSection(delegated: ComponentProps<"div">) {
  return (
    <div {...delegated}>
      {/* 40% is a magic number that makes <img/> matches its position in design */}
      <section className="md:grid md:items-center md:gap-6 md:grid-cols-[auto_40%] lg:gap-10 xl:gap-12">
        {/* 132vw is a magic number that makes <img/> matches its size in design */}
        <div className="w-[132vw] mx-auto md:max-w-none md:order-2 md:justify-self-auto">
          <img
            src="/images/illustration-working.svg"
            alt="Illustration of a man working from home on his desk with a computer"
          />
        </div>
        <div>
          <hgroup className="text-center text-balance mb-8 mt-12 md:text-start">
            <h1 className="mb-3 text-[2.625rem] text-body font-bold leading-12 sm:text-[3rem] md:text-[3.75rem] md:leading-18 lg:text-[4.5rem] lg:leading-20 xl:text-[5rem] xl:leading-22 xl:tracking-tight">
              More than just shorter links
            </h1>
            <p className="text-muted md:text-xl lg:text-[1.4rem] xl:leading-9 xl:-mt-3">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
          </hgroup>
          <Button className="mx-auto md:mx-0 xl:mb-12">Get Started</Button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
