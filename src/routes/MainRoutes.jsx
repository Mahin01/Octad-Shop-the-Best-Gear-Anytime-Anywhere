import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Signup/Register";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import My_Account from "../pages/My Account/My_Account";
import Checkout from "../pages/Checkout/Checkout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Register></Register>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/My_account",
          element: <My_Account></My_Account>
        },
        {
          path: "/checkout",
          element: <Checkout></Checkout>
        },
      ]},
  ]);