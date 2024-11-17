import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";
import { useAuth } from "../Context/AuthProvider";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { role, token } = useAuth();
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
