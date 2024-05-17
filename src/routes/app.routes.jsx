import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Meal } from "../pages/Meal";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal/:id" element={<Meal />} />

      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  );
}
