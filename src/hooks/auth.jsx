import { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { api } from "../services/api";
import { jwtDecode } from "jwt-decode";

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
      if(error) {
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
    } catch(error) {
      if(error.response) {
        alert(error.message);
      } else {
        alert(error.message);
      }
    }
  }

  async function getRole() {
    const response = await api.get("/sessions/role");
    setRole(response.data.role);
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

      await api.post("/meals/create", formData, {
        withCredentials: true
      });
    } catch(error) {
      if(error) {
        alert(error.response.data.message);
      } else {
        alert("Is not possible add a new meal");
      }
    }
  }

  async function updateMeal({ name, desc, price, type, ingredients, img, id }) {
    const formData = new FormData();
    const jsonData = {
      name: name || null,
      desc: desc || null,
      price: price || null,
      type: type || null,
      ingredients: ingredients || null
    };

    console.log(img)

    formData.append('data', JSON.stringify(jsonData));
    formData.append('img', img);

    await api.patch(`/meals/update/${id}`, formData, {
      withCredentials: true
    });
  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");

    if(user) {
      setData({ user: JSON.parse(user) });
    }

    getRole();
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