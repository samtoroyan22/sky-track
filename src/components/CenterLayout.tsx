import { Outlet } from "react-router";

export function CenterLayout() {
  return (
    <div className="mt-35 2xl:mt-0">
      <Outlet />
    </div>
  );
}
