import FooterNav from "@/components/footer-nav";

function Footer() {
  return (
    <footer className="bg-gray-500 flex flex-col gap-y-10 px-10 md:px-20 lg:flex-row xl:px-40">
      <div className="grow mx-auto lg:mx-0">
        <h3 className="w-30">
          <img src="/images/logo.svg" alt="shortly" className="block w-full" />
        </h3>
      </div>
      <FooterNav className="grow flex flex-wrap gap-y-10 gap-x-2 justify-center lg:gap-x-1" />
    </footer>
  );
}

export default Footer;
