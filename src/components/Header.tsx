import { Home, Pizza, UtensilsCrossed } from "lucide-react";

import { AccountMenu } from "./AccountMenu";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./theme/ThemeToggle";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center gap-6 px-6">
        <Pizza className="size-6"/>
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="size-4"/>
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="size-4"/>
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}