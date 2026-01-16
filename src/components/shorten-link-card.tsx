import Button from "@/components/button";
import { Separator } from "@base-ui/react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ShortenLinkCardProps extends ComponentProps<"div"> {
  href: string;
  shorten: string;
}

function ShortenLinkCard({
  href,
  shorten,
  className,
  ...delegated
}: ShortenLinkCardProps) {
  return (
    <div
      {...delegated}
      className={twMerge("flex flex-col gap-6 rounded-lg bg-white", className)}
    >
      <p>{href}</p>
      <Separator orientation="horizontal" />
      <strong>{shorten}</strong>
      <Button type="button">Copy</Button>
    </div>
  );
}

export default ShortenLinkCard;
