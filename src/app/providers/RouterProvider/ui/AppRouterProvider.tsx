import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesConfigObject } from "shared/config/RouterConfig/RouterConfig";

const AppRouterProvider = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RoutesConfigObject).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouterProvider;
