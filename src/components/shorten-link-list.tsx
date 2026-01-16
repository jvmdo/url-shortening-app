import { type ComponentProps } from "react";

import { useShorten } from "@/api";
import ShortenLinkCard from "@/components/shorten-link-card";
import { twMerge } from "tailwind-merge";

function ShortenLinkList({ className, ...delegated }: ComponentProps<"ul">) {
  const { data } = useShorten();

  if (!data) {
    return null;
  }

  return (
    <ul
      {...delegated}
      className={twMerge(
        "flex flex-col items-stretch gap-6 lg:gap-4",
        className
      )}
    >
      {data.map(({ id, ...link }) => (
        <li key={id}>
          <ShortenLinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}

export default ShortenLinkList;
