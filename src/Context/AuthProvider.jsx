import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [role, setRole] = useState("");
  const [token, setToken] = useState("");
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
