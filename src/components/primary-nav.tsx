import { type ComponentProps } from "react";

import { Collapsible } from "@base-ui/react/collapsible";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { Separator } from "@base-ui/react/separator";

const navItems = [
  { title: "Features", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "Resources", href: "#" },
];

function PrimaryNav(props: ComponentProps<typeof NavigationMenu.Root>) {
  return (
    <NavigationMenu.Root {...props}>
      <Collapsible.Root className="flex flex-col w-full">
        <Collapsible.Trigger className="relative group self-end lg:hidden">
          <AnimatedHamburgerIcon />
        </Collapsible.Trigger>
        <Collapsible.Panel
          hiddenUntilFound={true}
          className="h-(--collapsible-panel-height) flex flex-col justify-end overflow-hidden transition-all ease-out data-ending-style:h-0 data-starting-style:h-0 duration-150 lg:contents data-open:mb-4"
        >
          <NavigationMenu.List className="mt-4 px-6 py-8 flex flex-col gap-8 rounded-lg text-center text-white font-bold bg-primary-dark lg:flex-row lg:items-center lg:mt-0 lg:py-0 lg:text-muted lg:bg-transparent">
            {navItems.map(({ title, href }) => (
              <NavigationMenu.Item key={title}>
                <NavigationMenu.Link href={href} className="hover:text-primary">
                  {title}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}

            <Separator
              orientation="horizontal"
              className="h-px bg-background opacity-20 lg:hidden"
            />

            <NavigationMenu.Item className="lg:ml-auto">
              <NavigationMenu.Link href="#" className="hover:text-primary">
                Login
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#"
                className="block py-3 rounded-full text-white bg-primary hover:bg-primary-hover lg:w-22 xl:w-27"
              >
                Sign Up
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </Collapsible.Panel>
      </Collapsible.Root>
    </NavigationMenu.Root>
  );
}

export default PrimaryNav;

function AnimatedHamburgerIcon() {
  return (
    <span
      aria-hidden={true}
      className="relative size-12 overflow-hidden flex items-center justify-center rounded-full transform transition-all"
    >
      <span className="size-5 overflow-hidden flex flex-col justify-between transform transition-all duration-300 origin-center">
        <span className="bg-muted h-0.5 w-7 transform transition-all duration-300 origin-left group-data-panel-open:translate-y-6 delay-100"></span>
        <span className="bg-muted h-0.5 w-7 transform transition-all duration-300 group-data-panel-open:translate-y-6 delay-75"></span>
        <span className="bg-muted h-0.5 w-7 transform transition-all duration-300 origin-left group-data-panel-open:translate-y-6"></span>

        <span className="absolute flex items-center justify-between transform transition-all duration-300 top-1/2 -translate-y-10 group-data-panel-open:translate-y-0 group-data-panel-open:w-12">
          <span className="absolute bg-muted h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-100 group-data-panel-open:rotate-45"></span>
          <span className="absolute bg-muted h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-100 group-data-panel-open:-rotate-45"></span>
        </span>
      </span>
    </span>
  );
}
