import PrimaryNav from "@/components/primary-nav";
import { useIntersectionObserver } from "@uidotdev/usehooks";

function Header() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
  });

  return (
    <>
      <div ref={ref}></div>
      <div
        className="group sticky top-0 z-50 bg-white data-stuck:shadow-xl transition-shadow"
        data-stuck={!entry?.isIntersecting || undefined}
      >
        <header className="page-max-w page-px min-h-12 flex items-center transition-all group-data-stuck:min-h-16 lg:py-4 lg:gap-8 xl:gap-12">
          <a href="#" className="w-30">
            <img
              src="/images/logo.svg"
              alt="shortly"
              className="block w-full"
            />
          </a>
          <PrimaryNav className="grow" />
        </header>
      </div>
    </>
  );
}

export default Header;
