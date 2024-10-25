import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token"));
  const role = JSON.parse(sessionStorage.getItem("role"));
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    if (role === "user" && !pathname.startsWith("/users")) {
      navigate(-1);
    }

    if (role === "guide" && !pathname.startsWith("/guides")) {
      navigate(-1);
    }

    setIsLoading(false);
  }, [navigate, pathname, role, token]);

  return <div>{isLoading ? <Loader /> : children}</div>;
}

export default ProtectedRoute;
