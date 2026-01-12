import Button from "@/components/button";

function HeroSection() {
  return (
    <>
      {/* Compensate page gutter using negative margins */}
      <div className="overflow-x-clip overflow-y-visible -mr-6 sm:-mr-8 md:-mr-10 lg:-mr-30 xl:-mr-42.5">
        {/* 40% is a magic number that makes <img/> matches its position in design */}
        <section className="md:grid md:items-center md:gap-6 md:grid-cols-[auto_40%] lg:gap-12 xl:gap-18">
          {/* 132vw is a magic number that makes <img/> matches its size in design */}
          <div className="w-[132vw] max-w-150 mx-auto md:max-w-none md:order-2 md:justify-self-auto">
            <img
              src="/images/illustration-working.svg"
              alt="Illustration of a man working from home on his desk with a computer"
              // className="block w-full h-auto"
            />
          </div>
          {/* Neutralize negative margins */}
          <div className="pr-6 sm:pr-8 md:pr-10 lg:pr-30 xl:pr-42.5">
            <hgroup className="text-center mb-8 mt-12 md:text-start">
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
    </>
  );
}

export default HeroSection;
