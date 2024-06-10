import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { Loader } from "../components/Loader";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [role, setRole] = useState({});

  async function signIn({ name, email, password }) {
    try {
      await api.post("/user", 
        { name, email, password}, 
        { withCredentials: true }
      );
    } catch(error) {
      throw error
    }
  }

  async function getRole() {
    try {
      const response = await api.get("/sessions/role");
      setRole(response.data.role);
    } catch (error) {
      console.error("Failed to get role:", error);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  }

  async function signUp({ email, password }) {
    try {
      const response = await api.post("/sessions", 
        { email, password },
        { withCredentials: true }
      );
      const { user } = response.data;

      delete user.role;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));

      setData({ user });
      await getRole();
    } catch(error) {
      
      throw error
    }
  }

  function signOut() {
    localStorage.removeItem("@food-explorer:user");

    api.delete("/sessions/logout");

    setRole({});
    setData({});
  }

  async function newMeal({ name, desc, price, type, ingredients, img }) {
    try {
      const formData = new FormData();
      const jsonData = {
        name: name,
        desc: desc,
        price: price,
        type: type,
        ingredients: ingredients
      };
  
      formData.append('data', JSON.stringify(jsonData));
      formData.append('img', img);
  
      const response = await api.post("/meals/create", formData, {
        withCredentials: true
      });
    } catch (error) {
      throw error;
    }
  }

  async function updateMeal({ name, desc, price, type, ingredients, img, id }) {
    try {
      const formData = new FormData();
      const jsonData = {
        name: name || null,
        desc: desc || null,
        price: price || null,
        type: type || null,
        ingredients: ingredients || null
      };

      formData.append('data', JSON.stringify(jsonData));
      formData.append('img', img);

      await api.patch(`/meals/update/${id}`, formData, {
        withCredentials: true
      });
    } catch (error) {
      alert(error)
      throw error
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");

    if(user) {
      setData({ user: JSON.parse(user) });
      getRole();
    } else {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, role, signUp, signIn, signOut, newMeal, updateMeal }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }