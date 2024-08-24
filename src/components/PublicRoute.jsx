import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isLoggedIn, redirectPath = "/" }) => {
  return !isLoggedIn ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PublicRoute;
