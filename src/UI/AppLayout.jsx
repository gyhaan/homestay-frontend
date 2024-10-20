import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

function AppLayout() {
  const role = JSON.parse(sessionStorage.getItem("role"));

  return (
    <>
      {role ? <AppNav role={role} /> : <AppNav role={"none"} />}
      <Outlet />
    </>
  );
}

export default AppLayout;
