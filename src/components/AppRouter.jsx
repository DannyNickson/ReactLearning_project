import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from './../pages/Posts';
import PageNotFound from './../pages/PageNotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/404" element={<PageNotFound />}></Route>
      <Route path="/*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRouter;
