import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [role, setRole] = useState(function () {
    const role = JSON.parse(sessionStorage.getItem("role"));
    return role || null;
  });

  const [token, setToken] = useState(function () {
    const token = JSON.parse(sessionStorage.getItem("token"));
    return token || null;
  });

  console.log(role);

  return (
    <AuthContext.Provider value={{ role, setRole, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Context was used in the wrong place");
  }

  return context;
}

export { AuthProvider, useAuth };
