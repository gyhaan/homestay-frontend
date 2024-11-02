import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import { useAuth } from "../Context/AuthProvider";

function AppLayout() {
  const { role } = useAuth();

  return (
    <>
      {role ? <AppNav role={role} /> : <AppNav role={"none"} />}
      <Outlet />
    </>
  );
}

export default AppLayout;
