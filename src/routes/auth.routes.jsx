import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return(
    <Routes>
      <Route path="/login" element={<SignUp />} />
      <Route path="/create-account" element={<SignIn />} />

      <Route path="*" element={<SignUp />}/>
    </Routes>
  );
}
