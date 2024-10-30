import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import Loader from "../UI/Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { role } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // if (!token) {
    //   navigate("/");
    //   return;
    // }

    if (role === "user" && !pathname.startsWith("/users")) {
      navigate(-1);
    } else if (role === "guide" && !pathname.startsWith("/guides")) {
      navigate(-1);
    } else {
      navigate(-1);
      return;
    }

    setIsLoading(false);
  }, [navigate, pathname, role]);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-svh">
          <Loader />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default ProtectedRoute;
