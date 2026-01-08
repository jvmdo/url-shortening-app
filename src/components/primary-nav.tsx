import { Collapsible } from "@base-ui/react/collapsible";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { Separator } from "@base-ui/react/separator";

function PrimaryNav() {
  return (
    <NavigationMenu.Root>
      <Collapsible.Root className="flex flex-col w-full text-gray-900">
        <Collapsible.Trigger className="relative group self-end sm:hidden">
          <AnimatedHamburgerIcon />
        </Collapsible.Trigger>
        <Collapsible.Panel
          hiddenUntilFound={true}
          className="h-(--collapsible-panel-height) flex flex-col justify-end overflow-hidden transition-all ease-out data-ending-style:h-0 data-starting-style:h-0 duration-150 sm:contents"
        >
          <NavigationMenu.List className="mt-3 flex flex-col gap-2 rounded-sm bg-gray-100 sm:flex-row sm:mt-0">
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">Features</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">Pricing</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">Resources</NavigationMenu.Link>
            </NavigationMenu.Item>
            <Separator
              orientation="horizontal"
              className="h-px bg-gray-300 sm:hidden"
            />
            <NavigationMenu.Item className="sm:ml-auto">
              <NavigationMenu.Link href="#">Login</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">Sign Up</NavigationMenu.Link>
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
        <span className="bg-gray-400 h-0.5 w-7 transform transition-all duration-300 origin-left group-data-panel-open:translate-y-6 delay-100"></span>
        <span className="bg-gray-400 h-0.5 w-7 transform transition-all duration-300 group-data-panel-open:translate-y-6 delay-75"></span>
        <span className="bg-gray-400 h-0.5 w-7 transform transition-all duration-300 origin-left group-data-panel-open:translate-y-6"></span>

        <span className="absolute flex items-center justify-between transform transition-all duration-300 top-1/2 -translate-y-10 group-data-panel-open:translate-y-0 group-data-panel-open:w-12">
          <span className="absolute bg-gray-400 h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-100 group-data-panel-open:rotate-45"></span>
          <span className="absolute bg-gray-400 h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-100 group-data-panel-open:-rotate-45"></span>
        </span>
      </span>
    </span>
  );
}
