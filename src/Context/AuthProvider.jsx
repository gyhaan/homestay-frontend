import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [role, setRole] = useState(() => localStorage.getItem("role") || "");
  const [token, setToken] = useState("");

  console.log(typeof role);
  console.log(role);
  console.log(token);

  return (
    <AuthContext.Provider value={{ role, token, setRole, setToken }}>
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
