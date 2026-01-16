import React from "react";

import Button from "@/components/button";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

interface ShortenLinkCardProps extends React.ComponentProps<"div"> {
  href: string;
  shorten: string;
}

function ShortenLinkCard({
  href,
  shorten,
  className,
  ...delegated
}: ShortenLinkCardProps) {
  const [btnText, setBtnText] = React.useState<"copy" | "copied!">("copy");
  const intervalIdRef = React.useRef<number | null>(null);

  const handleCopyToClipboard = async () => {
    try {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }

      await navigator.clipboard.writeText(shorten);
      setBtnText("copied!");

      const intervalId = setInterval(() => {
        setBtnText("copy");
      }, 5000);

      intervalIdRef.current = intervalId;
    } catch {
      toast.error("Copy failed", {
        id: "copy-failed",
        description:
          "It seems writing to the clipboard is not allowed on your system",
      });
    }
  };

  const isCopied = btnText === "copied!";

  return (
    <div
      {...delegated}
      className={twMerge(
        "flex flex-col gap-3 rounded-lg bg-white md:flex-row md:items-center md:py-4 md:text-xl",
        className
      )}
    >
      <div className="p-4 pb-3 border-b border-b-background md:p-0 md:pl-8 md:border-none md:flex-1 md:min-w-0">
        <p className="truncate">{href}</p>
      </div>
      <div className="px-4 pb-4 md:p-0 md:pr-8 md:flex md:gap-4 md:items-center md:shrink-0">
        <strong className="mb-3 font-medium text-primary block md:mb-0">
          {shorten}
        </strong>
        <Button
          type="button"
          className="w-full h-10 rounded-lg text-base capitalize disabled:bg-primary-dark! md:w-24 md:shrink-0"
          disabled={isCopied}
          onClick={handleCopyToClipboard}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}

export default ShortenLinkCard;
