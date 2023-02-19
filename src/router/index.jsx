import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddRecipe from '../pages/AddRecipe/index';
import UpdateRecipe from '../pages/UpdateRecipe/index';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/404/notFound';
import VideoRecipe from '../pages/VideoRecipe/VideoRecipe';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import CodeResetPassword from '../pages/Auth/CodeResetPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import DetailRecipe from '../pages/DetailRecipe';
import Search from '../pages/Search';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/code-reset-password" element={<CodeResetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route index element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/update" element={<UpdateRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/video" element={<VideoRecipe />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detailRecipe/:id" element={<DetailRecipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
