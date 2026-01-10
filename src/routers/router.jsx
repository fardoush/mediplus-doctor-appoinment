import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";

import ErrorPage from "../pages/ErrorPage";
import DoctorDetails from "../pages/DoctorDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import PrivateRoute from "../Provider/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/doctorData.json"),
        Component: Home,
      },
      {
        path: "/doctorDetails/:id",
        loader: () => fetch("/doctorData.json"),
        Component: DoctorDetails
        // Component: () => (
        //   <PrivateRoute>
        //     <DoctorDetails/>
        //   </PrivateRoute>
        // )
     
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children:[
      {
        path:"/auth/login",
        Component: Login
      
      },
      {
        path: "/auth/register",
        Component: Register
     
      }
    ]
  },

]);

export default router;
