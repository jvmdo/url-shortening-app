import React from "react";

import Button from "@/components/button";
import { Separator } from "@base-ui/react";
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
  const [btnText, setBtnText] = React.useState<"copy" | "copied">("copy");
  const intervalIdRef = React.useRef<number | null>(null);

  const handleCopyToClipboard = async () => {
    try {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }

      await navigator.clipboard.writeText(shorten);
      setBtnText("copied");

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

  const isCopied = btnText === "copied";

  return (
    <div
      {...delegated}
      className={twMerge("flex flex-col gap-6 rounded-lg bg-white", className)}
    >
      <p>{href}</p>
      <Separator orientation="horizontal" />
      <strong>{shorten}</strong>
      <Button
        type="button"
        className="capitalize disabled:bg-primary-dark!"
        disabled={isCopied}
        onClick={handleCopyToClipboard}
      >
        {btnText}
      </Button>
    </div>
  );
}

export default ShortenLinkCard;
