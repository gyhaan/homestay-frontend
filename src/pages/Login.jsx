import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../UI/Loader";
import { loginUser } from "../services/authApi";

import { toast } from "sonner";
import { useAuth } from "../Context/AuthProvider";

function Login() {
  const { role, token, setRole, setToken } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (role === "user") {
      navigate("/users");
    }

    if (role === "guide") {
      navigate("/guides");
    }
  }, [navigate, role, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { role, token } = await loginUser(formData);
      setRole(role);
      setToken(token);
      navigate("/listings");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen mx-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenish"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenish"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="w-full bg-greenish text-white py-2 rounded-lg hover:bg-greenish transition-colors"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
