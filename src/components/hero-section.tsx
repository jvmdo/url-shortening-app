function HeroSection() {
  return (
    <div className="overflow-x-clip overflow-y-visible">
      {/* 40% is a magic number that makes <img/> matches its position in design */}
      <section className="px-6 sm:px-8 md:px-10 md:grid md:items-center md:gap-6 md:grid-cols-[auto_40%] lg:gap-12 lg:px-30 xl:gap-18 xl:px-42.5">
        {/* 132vw is a magic number that makes <img/> matches its size in design */}
        <div className="w-[132vw] max-w-150 mx-auto md:max-w-none md:order-2 md:justify-self-auto">
          <img
            src="/images/illustration-working.svg"
            alt="Illustration of a man working from home on his desk with a computer"
          />
        </div>
        <div className="mt-12 text-center md:text-start">
          <h2>More than just shorter links</h2>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button type="button">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
