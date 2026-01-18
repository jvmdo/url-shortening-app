import Button from "@/components/button";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PrimaryNav from "@/components/primary-nav";
import ShortenLinksSection from "@/components/shorten-links-section";
import { useIntersectionObserver } from "@uidotdev/usehooks";

function App() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
  });

  return (
    <div className="min-h-svh page-bg overflow-x-clip pt-8 pb-13 md:pt-10 md:pb-14 lg:pt-8 lg:pb-16 xl:pt-10 xl:pb-18">
      <div ref={ref}></div>
      <header
        data-stuck={!entry?.isIntersecting || undefined}
        className="group page-max-w page-px z-50 flex items-start sticky top-0 bg-white transition-shadow data-stuck:shadow-xl lg:py-4 lg:gap-8 xl:gap-12"
      >
        <a href="#" className="absolute flex items-center h-12 w-30 lg:static">
          <img src="/images/logo.svg" alt="shortly" className="block w-full" />
        </a>
        <PrimaryNav className="grow" />
      </header>
      <main>
        <HeroSection className="page-px page-max-w bg-white pt-4 pb-22 sm:pt-8 lg:pt-16 lg:pb-17 xl:pt-20" />
        <div className="bg-background">
          <ShortenLinksSection />
          <FeaturesSection className="page-px page-max-w pt-22 pb-20 sm:pb-22 md:pb-24 lg:pb-42 xl:pb-52 lg:pt-29" />
        </div>
        <section className="h-75 cta-bg-image bg-primary-dark page-px flex flex-col justify-center gap-4 py-22 sm:py-20 md:py-18 lg:h-62.5 lg:gap-5 lg:py-16 xl:py-14">
          <h2 className="text-center text-[1.75rem] text-white font-bold md:text-[2rem] xl:text-[2.5rem]">
            Boost your links today
          </h2>
          <Button className="mx-auto">Get Started</Button>
        </section>
      </main>
      <Footer className="page-px page-max-w pt-13 sm:pt-14 md:pt-15 lg:pt-16.5 xl:pt-17.5" />
    </div>
  );
}

export default App;
