import React from "react";
import { Route, Routes } from "react-router-dom";
import CallbackPage from "../views/CallbackPage";
import ProfilePage from "../views/ProfilePage";

export default function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<CallbackPage />} />
      <Route exact path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
