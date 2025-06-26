import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="relative p-7">
      <Outlet />
    </div>
  );
}
