import { createBrowserRouter } from "react-router-dom";
import { Login } from "../feature/auth/login";
import HomePage from "../feature/cms/home-page";
import { AuthCheck } from "../middleware/auth-check";
import Register from "../feature/auth/register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthCheck,
    children: [
      { path: "/", Component: HomePage },
      { path: "/login", Component: Login },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
