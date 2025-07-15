import { Outlet } from "react-router";
import { Header } from "./header/Header";

export function Layout() {
  return (
    <div className="relative overflow-x-hidden p-7 sm:p-2.5 md:p-2.5">
      <Header />
      <Outlet />
    </div>
  );
}
