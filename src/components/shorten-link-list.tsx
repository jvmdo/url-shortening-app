import { type ComponentProps } from "react";

import { useShorten } from "@/api";
import ShortenLinkCard from "@/components/shorten-link-card";
import { motion } from "motion/react";
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
        className,
      )}
    >
      {data.map(({ id, ...link }) => (
        <motion.li
          key={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ type: "tween" }}
        >
          <ShortenLinkCard {...link} />
        </motion.li>
      ))}
    </ul>
  );
}

export default ShortenLinkList;
