import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Meal } from "../pages/Meal";
import { NewMeal } from "../pages/NewMeal";

export function AdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal/:id" element={<Meal />} />
      <Route path="/new-meal" element={<NewMeal />} />

      <Route path="*" element={<Home />}/>
    </Routes>
  );
}
