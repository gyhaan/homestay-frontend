import { useEffect, useState } from "react";
import { toast } from "sonner";
import Loader from "../UI/Loader";
import { signUpUser } from "../services/authApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

function SignUp() {
  const { role, token, setRole, setToken } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

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

    if (formData.password !== formData.passwordConfirm) {
      toast.warning("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const { token, data } = await signUpUser(formData);
      setRole(data.user.role);
      setToken(token);

      if (data.user.role === "user") {
        navigate("/users");
      }

      if (data.user.role === "guide") {
        navigate("/guides");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mx-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl flex flex-wrap gap-4 items-center"
      >
        <div className="flex-1 min-w-56">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenish"
          />
        </div>
        <div className="flex-1 min-w-56">
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
        <div className="w-full">
          <label htmlFor="role" className="block text-sm font-medium mb-1">
            Role:
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenish"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="user" className=" hover:text-white">
              User
            </option>
            <option value="guide" className=" hover:text-white">
              Guide
            </option>
          </select>
        </div>

        <div className="flex-1 min-w-56">
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
        <div className="flex-1 min-w-56">
          <label
            htmlFor="passwordConfirm"
            className="block text-sm font-medium mb-1"
          >
            Confirm Password:
          </label>
          <div className="relative">
            <input
              type={showPasswordConfirm ? "text" : "password"}
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenish"
            />
            <button
              type="button"
              onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 "
            >
              {showPasswordConfirm ? "Hide" : "Show"}
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
            Sign Up
          </button>
        )}
      </form>
    </div>
  );
}

export default SignUp;
