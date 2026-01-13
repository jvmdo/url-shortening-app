import React from "react";
import { twMerge } from "tailwind-merge";

interface FeatureCardProps extends React.ComponentProps<"div"> {
  imgSrc: string;
  title: string;
  content: string;
}

function FeatureCard({ imgSrc, title, content, className }: FeatureCardProps) {
  return (
    <div
      className={twMerge(
        `px-6 pb-10 pt-20 rounded-md grid row-span-2 grid-rows-subgrid bg-white relative lg:max-w-88`,
        className
      )}
    >
      <span className="size-22 rounded-full flex justify-center items-center bg-primary-dark absolute left-1/2 top-0 -translate-1/2">
        <img src={imgSrc} alt="" />
      </span>
      <hgroup className="grid row-span-2 grid-rows-subgrid gap-5 text-center lg:text-start">
        <h3 className="text-[1.375rem] text-body font-bold leading-6">
          {title}
        </h3>
        <p className="max-w-[44ch] text-muted text-balance">{content}</p>
      </hgroup>
    </div>
  );
}

export default FeatureCard;
