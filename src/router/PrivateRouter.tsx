import { RouteWhitNotFound } from "@/Components/RouteWhitNotFound";
import { Dashboard } from "@/Views/Private/Dashboard";
import { Navigate, Route } from "react-router-dom";

export const PrivateRouter = () => {
  return (
    <RouteWhitNotFound>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </RouteWhitNotFound>
  );
};
