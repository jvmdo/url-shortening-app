import HeroSection from "@/components/hero-section";
import PrimaryNav from "@/components/primary-nav";
import ShortenItForm from "@/components/shorten-it-form";

function App() {
  return (
    <div className="py-8 px-6 sm:px-8 md:px-10 lg:px-30 xl:px-42.5">
      <header className="group flex items-start sticky top-0 mb-4">
        <h3 className="absolute flex items-center h-12 w-30 sm:w-40 md:w-50 lg:w-60 xl:w-72.5">
          <img src="/images/logo.svg" alt="shortly" className="block w-full" />
        </h3>
        <PrimaryNav className="grow" />
      </header>
      <main>
        <HeroSection />
        <ShortenItForm />
      </main>
    </div>
  );
}

export default App;
