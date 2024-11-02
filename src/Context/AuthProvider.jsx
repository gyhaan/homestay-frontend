import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [role, setRole] = useState(() => localStorage.getItem("role") || "");
  const [token, setToken] = useState("");

<<<<<<< HEAD
=======
  console.log(typeof role);
>>>>>>> f5522639eb8be4d968d17ef3f7deb27b92ee3260
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
