import type React from "react";

export type NavSectionItem = {
  label: string;
  href: string;
};

export interface NavSectionProps extends React.ComponentProps<"section"> {
  title: string;
  items: NavSectionItem[];
}

function NavSection({ title, items, ...delegated }: NavSectionProps) {
  return (
    <section {...delegated}>
      <h4 className="mb-5 font-bold text-white text-center lg:text-start">
        {title}
      </h4>
      <ul className="flex flex-col gap-2 items-center lg:items-start">
        {items.map(({ label, href }) => (
          <li key={label} className="text-secondary hover:text-primary">
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NavSection;
