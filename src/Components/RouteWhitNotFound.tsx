import { ReactNode } from "react";
import { Routes, Navigate, Route } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const RouteWhitNotFound = ({ children }: Props) => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<h1>404</h1>} />
        {children}
      </Routes>
    </>
  );
};
