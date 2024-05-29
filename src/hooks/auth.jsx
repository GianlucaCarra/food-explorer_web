import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", 
        { email, password },
        { withCredentials: true }
      );
      const { user } = response.data;

      localStorage.setItem("@portfolio:user", JSON.stringify(user));

      setData({ user });
    } catch(error) {
      if(error.response) {
        alert(error.message);
      } else {
        alert("E-mail or password incorrect!");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@portfolio:user");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@portfolio:user");

    if(user) {
      setData({ user: JSON.parse(user) })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }