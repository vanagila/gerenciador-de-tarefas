import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignUp } from "../../pages/SignUp";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export const RoutesApp = () => {
  return <RouterProvider router={router} />;
};
