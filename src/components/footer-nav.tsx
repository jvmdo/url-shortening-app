import React from "react";

import NavSection, { type NavSectionProps } from "@/components/nav-section";
import type { NavSocialsProps } from "@/components/nav-socials";
import NavSocials from "@/components/nav-socials";

const navItems: NavSectionProps[] = [
  {
    title: "Features",
    items: [
      { label: "Link Shortening", href: "#" },
      { label: "Branded Links", href: "#" },
      { label: "Analytics", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "Developers", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const navSocials: NavSocialsProps = {
  items: [
    { name: "facebook", href: "#" },
    { name: "twitter", href: "#" },
    { name: "pinterest", href: "#" },
    { name: "instagram", href: "#" },
  ],
};

function FooterNav(props: React.ComponentProps<"nav">) {
  return (
    <nav {...props}>
      {navItems.map(({ title, items }) => (
        <NavSection
          key={title}
          title={title}
          items={items}
          className="basis-50 first:basis-120 sm:first:basis-50 md:basis-40! md:grow xl:basis-0!"
        />
      ))}
      <NavSocials
        items={navSocials.items}
        className="basis-120 md:basis-20 md:grow xl:basis-0"
      />
    </nav>
  );
}

export default FooterNav;
