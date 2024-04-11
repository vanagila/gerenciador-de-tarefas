import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignUp } from "../../pages/SignUp";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/",
    element: <Home />,
  },
]);

export const RoutesApp = () => {
  return <RouterProvider router={router} />;
};
