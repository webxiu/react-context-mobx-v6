import { createBrowserRouter, RouterProvider, RouteObject, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("@/layout"));
const NotFound = lazy(() => import("@/pages/notFound"));
const Login = lazy(() => import("@/pages/login"));
const Dashboard = lazy(() => import("@/pages/home/dashboard"));
const Community = lazy(() => import("@/pages/home/community"));
const Test = lazy(() => import("@/components/Test"));

// 参考文档: https://reactrouter.com/en/main/start/overview

export const menus = [
  { index: true, path: "dashboard", title: "首页", element: <Dashboard /> },
  { path: "community", title: "社区", element: <Community /> },
  { path: "test", title: "测试", element: <Test /> },
];

const routes: RouteObject[] = [
  { path: "login", element: <Login /> },
  { path: "/", element: <Navigate to="/home/dashboard" /> },
  { path: "/home", element: <Layout />, children: menus },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes);
const RootRouter = () => (
  <Suspense fallback={<div>Loading</div>}>
    <RouterProvider router={router} />
  </Suspense>
);

export default RootRouter;
