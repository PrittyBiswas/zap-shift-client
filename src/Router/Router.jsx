import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import Private from "./PrivateRoute";
import Rider from "../Pages/BeRider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Service from "../Pages/Service/Service";
import GenericErrorPage from "../components/ErrorPages/GenericErrorPage";
import LoaderErrorPage from "../components/ErrorPages/LoaderErrorPage";

const safeJsonLoader = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return await res.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <GenericErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'service',
        element: <Service></Service>
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => safeJsonLoader('/services-center.json'),
        errorElement: <LoaderErrorPage />
      },
      {
        path: 'SendParcel',
        element: <Private><SendParcel></SendParcel> </Private>,
        loader: () => safeJsonLoader('/services-center.json'),
        errorElement: <LoaderErrorPage />
      },
      {
        path: 'about-us',
        element: <About></About>
      },
      {
        path: 'rider',
        element: <Private><Rider></Rider></Private>
      },
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    errorElement: <GenericErrorPage />,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <GenericErrorPage />,
    children: [
      {
        path: 'my-parcels',
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      }
    ]
  }
]);
