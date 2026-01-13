import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import PrimaryNav from "@/components/primary-nav";
import ShortenItForm from "@/components/shorten-it-form";

function App() {
  return (
    <div className="py-8 md:py-10 lg:py-12 xl:py-14">
      <header className="group flex items-start mb-4 sticky top-0 page-px bg-white z-50">
        <h3 className="absolute flex items-center h-12 w-30 sm:w-40 md:w-50 lg:w-60 xl:w-72.5">
          <img src="/images/logo.svg" alt="shortly" className="block w-full" />
        </h3>
        <PrimaryNav className="grow" />
      </header>
      <main>
        <HeroSection className="page-px bg-white pb-42" />
        <ShortenItForm className="page-px absolute inset-x-0 -translate-y-1/2" />
        <FeaturesSection className="page-px bg-background pt-42 pb-20 sm:pb-22 md:pb-24 lg:pb-42 xl:pb-52" />
      </main>
    </div>
  );
}

export default App;
