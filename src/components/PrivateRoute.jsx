// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, redirectPath = "/login" }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
