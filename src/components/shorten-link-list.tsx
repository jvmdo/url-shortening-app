import { type ComponentProps } from "react";

import { useShorten } from "@/api";
import ShortenLinkCard from "@/components/shorten-link-card";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

function ShortenLinkList({
  className,
  ...delegated
}: ComponentProps<typeof motion.ul>) {
  const { data } = useShorten();

  if (!data) {
    return null;
  }

  return (
    <motion.ul
      {...delegated}
      className={twMerge(
        "flex flex-col items-stretch [--gap:1.5rem] lg:[--gap:1rem]",
        className,
      )}
      layout={true}
      initial={{ gap: 0 }}
      animate={{ gap: "var(--gap)" }}
    >
      <AnimatePresence>
        {data.map((link) => (
          <motion.li
            key={link.id}
            layout="position"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, scale: 0 }}
            transition={{ type: "tween" }}
          >
            <ShortenLinkCard {...link} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

export default ShortenLinkList;
