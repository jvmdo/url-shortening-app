import ShortenItForm from "@/components/shorten-it-form";
import ShortenLinkList from "@/components/shorten-link-list";
import { VisuallyHidden } from "radix-ui";

function ShortenLinksSection() {
  return (
    <section>
      <VisuallyHidden.Root>
        <h2>Try it out</h2>
        <p>Enter the link you want to shorten in the form</p>
      </VisuallyHidden.Root>
      <div className="bg-linear-to-b from-white from-50% to-background to-50%">
        <ShortenItForm className="page-px page-max-w" />
      </div>
      <ShortenLinkList className="page-px page-max-w mt-6" />
    </section>
  );
}

export default ShortenLinksSection;
