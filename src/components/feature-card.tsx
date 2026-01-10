import React from "react";

interface FeatureCardProps extends React.ComponentProps<"div"> {
  imgSrc: string;
  title: string;
  content: string;
}

function FeatureCard({ imgSrc, title, content, className }: FeatureCardProps) {
  return (
    <div
      className={`px-6 pb-10 pt-20 rounded-sm grid row-span-2 grid-rows-subgrid bg-gray-200 relative lg:max-w-88 ${className}`}
    >
      <span className="size-22 rounded-full flex justify-center items-center bg-purple-950 absolute left-1/2 top-0 -translate-1/2">
        <img src={imgSrc} alt="" />
      </span>
      <hgroup className="grid row-span-2 grid-rows-subgrid gap-5 text-center lg:text-start">
        <h3 className="text-2xl leading-6">{title}</h3>
        <p className="max-w-[44ch]">{content}</p>
      </hgroup>
    </div>
  );
}

export default FeatureCard;
