import { Outlet } from "react-router";

export function CenterLayout() {
  return (
    <div className="mt-15">
      <Outlet />
    </div>
  );
}
