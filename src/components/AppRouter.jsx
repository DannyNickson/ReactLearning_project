import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routs";

const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={<route.element />}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/*" element={<Navigate to="/404" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={<route.element />}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
