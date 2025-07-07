import { Link, useLocation } from "react-router";
import { ThemeToggle } from "../ThemeToggle";
import { headerMenuData } from "./header-menu.data";
import { HeaderMenuItem } from "./HeaderMenuItem";
import { match } from "path-to-regexp";
import { Heart } from "../animate-ui/icons/heart";

export function Header() {
  const location = useLocation();

  return (
    <div
      className="absolute top-7 left-1/2 -translate-x-1/2 flex items-center justify-between
                 w-1/2 rounded-xl bg-card p-mini-element px-5 sm:px-mini-element lg:w-full lg:top-0 lg:relative lg:mb-5
                 sm:rounded-lg"
    >
      <div className="flex items-center gap-6 sm:gap-3">
        <img
          src="/logo.svg"
          alt="Sky Track logo"
          className="w-12 h-12 sm:w-10 sm:h-10"
        />
        <nav>
          <ul className="flex items-center gap-6 sm:gap-3">
            {headerMenuData.map((item) => (
              <HeaderMenuItem
                key={item.href}
                item={item}
                isActive={!!match(item.href)(location.pathname)}
              />
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-1">
        <Link to="/favorites">
          <Heart
            size={45}
            className="p-2 rounded-full bg-card hover:bg-neutral-700 transition-colors
        flex items-center justify-center"
          />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
