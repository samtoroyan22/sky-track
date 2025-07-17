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
      className="absolute z-50 top-7 left-1/2 -translate-x-1/2 flex items-center justify-between
                 w-1/2 rounded-lg bg-card p-5 px-5 sm:px-mini-element 2xl:w-full 2xl:top-0 2xl:relative 2xl:mb-5
                 sm:rounded-lg xs:flex-col xs:pb-4"
    >
      <div className="flex items-center gap-6 sm:gap-3 xs:flex-wrap xs:justify-center xs:mb-3">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Sky Track logo"
            className="w-12 h-12 sm:w-10 sm:h-10"
          />
        </Link>

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
          <Heart className="p-2 rounded-full bg-card hover:bg-neutral-300 hover:dark:bg-neutral-700 transition-colors flex items-center justify-center w-[43px] h-[43px] sm:w-[33px] sm:h-[33px]" />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
