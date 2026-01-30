import { createBrowserRouter, Navigate } from "react-router";
import { Index } from "./pages/Index";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
  },
  {
    path: "*",
    element: <Navigate to="/"></Navigate>,
  },
]);
