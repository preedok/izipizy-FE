<<<<<<< HEAD
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AddRecipe from '../pages/AddRecipe/index';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/404/notFound';
import VideoRecipe from '../pages/VideoRecipe/VideoRecipe';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import CodeResetPassword from '../pages/Auth/CodeResetPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import DetailRecipe from '../pages/DetailRecipe';
import Swal from 'sweetalert2';
import Search from '../pages/Search';
import Popular from '../pages/Popular';
=======
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe/index";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/404/notFound";
import VideoRecipe from "../pages/VideoRecipe/VideoRecipe";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import CodeResetPassword from "../pages/Auth/CodeResetPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import DetailRecipe from "../pages/DetailRecipe";
import Swal from "sweetalert2";
import Search from "../pages/Search";
>>>>>>> 3edae89157730a14ace0cf17c3bbd5a463e51e3e

// Scroll to Top when switching page
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};
// Private routing
const Auth = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    Swal.fire({
      title: "Denied!",
      text: `Access Denied, Please Login!`,
      icon: "error",
    });
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" />
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/forgot-password"
              element={
                <Auth>
                  <ForgotPassword />
                </Auth>
              }
            />
            <Route
              path="/code-reset-password"
              element={
                <Auth>
                  <CodeResetPassword />
                </Auth>
              }
            />
            <Route
              path="/reset-password"
              element={
                <Auth>
                  <ResetPassword />
                </Auth>
              }
            />

            <Route
              path="/add"
              element={
                <Auth>
                  <AddRecipe />
                </Auth>
              }
            />
            <Route
              path="/profile"
              element={
                <Auth>
                  <Profile />
                </Auth>
              }
            />
            <Route path="/video/:id" element={<VideoRecipe />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/detailRecipe/:id" element={<DetailRecipe />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default Router;
