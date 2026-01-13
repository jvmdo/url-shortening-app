import { VisuallyHidden } from "radix-ui";

export type NavSocialItem = {
  name: string;
  href: string;
};

export interface NavSocialsProps extends React.ComponentProps<"section"> {
  items: NavSocialItem[];
}

function NavSocials({ items, ...delegated }: NavSocialsProps) {
  return (
    <section {...delegated}>
      <VisuallyHidden.Root asChild>
        <h4>Socials</h4>
      </VisuallyHidden.Root>
      <ul className="flex flex-wrap justify-center items-center gap-1 md:flex-col lg:flex-row xl:justify-between">
        {items.map(({ name, href }) => (
          <li key={name}>
            <a href={href} className="block p-2 hover:icon-primary">
              <img src={`/icons/${name}.svg`} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NavSocials;
