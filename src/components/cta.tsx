import Button from "@/components/button";

function Cta() {
  return (
    <section className="h-75 cta-bg-image bg-primary-dark page-px flex flex-col justify-center gap-4 py-22 sm:py-20 md:py-18 lg:h-62.5 lg:gap-5 lg:py-16 xl:py-14">
      <h2 className="text-center text-[1.75rem] text-white font-bold md:text-[2rem] xl:text-[2.5rem]">
        Boost your links today
      </h2>
      <Button asLink={true} href="#shorten" className="mx-auto">
        Get Started
      </Button>
    </section>
  );
}

export default Cta;
