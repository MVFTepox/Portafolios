import { Route } from "react-router-dom";
import { Home } from "./Views/Public/Home";
import { PrivateGuard } from "@/guard/PrivateGuard";
import { PrivateRouter } from "./router/PrivateRouter";
import { RouteWhitNotFound } from "./Components";

export const AppRouter = () => {
  return (
    <RouteWhitNotFound>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateGuard />}>
        <Route path="/private" element={<PrivateRouter />} />
      </Route>
    </RouteWhitNotFound>
  );
};
