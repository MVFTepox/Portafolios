import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
  const aunthenticated = true;

  return aunthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
