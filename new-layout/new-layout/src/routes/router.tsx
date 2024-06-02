import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/companents/layout/LayoutSide";
import HomePage from "../pagesSide/pages/HomePage";
import AboutPage from "../pagesSide/pages/AboutPage";
import DashboardPage from "../pagesAdmin/companents/pages/DashboardPage";
import SettingsPage from "../pagesAdmin/companents/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSide />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutSide />,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/admin/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
