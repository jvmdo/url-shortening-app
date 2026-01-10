import FeatureCard from "@/components/feature-card";

function FeaturesSection() {
  return (
    <section className="px-6 flex flex-col justify-center gap-22">
      <div className="text-center">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="relative grid gap-24 lg:gap-6 lg:grid-cols-[repeat(3,1fr)]">
        <FeatureCard
          imgSrc="/icons/brand-recognition.svg"
          title="Brand Recognition"
          content="Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content."
          className="place-self-start"
        />
        <FeatureCard
          imgSrc="/icons/detailed-records.svg"
          title="Detailed Records"
          content="Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions."
          className="place-self-center lg:top-11"
        />
        <FeatureCard
          imgSrc="/icons/fully-customizable.svg"
          title="Fully Customizable"
          content="Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement."
          className="place-self-end lg:top-22"
        />
        {/* Ribbon mobile/desktop */}
        <span className="w-2 absolute inset-y-0 left-1/2 -translate-x-1/2 -z-10 bg-cyan-300 lg:hidden" />
        <span className="absolute inset-x-0 top-3/5 -translate-y-1/2 -z-10 bg-cyan-300 lg:h-2" />
      </div>
    </section>
  );
}

export default FeaturesSection;
