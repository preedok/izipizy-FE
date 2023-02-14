import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe/index";
import UpdateRecipe from "../pages/UpdateRecipe/index";
import Profile from "../pages/Profile/Profile";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/update" element={<UpdateRecipe />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
