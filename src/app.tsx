import Cta from "@/components/cta";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ShortenLinksSection from "@/components/shorten-links-section";

function App() {
  return (
    <div className="min-h-svh page-bg overflow-x-clip pt-8 pb-13 md:pt-10 md:pb-14 lg:pt-8 lg:pb-16 xl:pt-10 xl:pb-18">
      <Header />
      <main>
        <HeroSection className="page-px page-max-w bg-white pt-4 pb-22 sm:pt-8 lg:pt-16 lg:pb-17 xl:pt-20" />
        <div className="bg-background">
          <ShortenLinksSection />
          <FeaturesSection className="page-px page-max-w pt-22 pb-20 sm:pb-22 md:pb-24 lg:pb-42 xl:pb-52 lg:pt-29" />
        </div>
        <Cta />
      </main>
      <Footer className="page-px page-max-w pt-13 sm:pt-14 md:pt-15 lg:pt-16.5 xl:pt-17.5" />
    </div>
  );
}

export default App;
