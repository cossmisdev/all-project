import React from "react";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../companents/ListProduct";
import Admin from "../companents/Admin";

const MainRoutes = () => {
  const ROUTES = [
    {
      link: "/admin",
      element: <Admin />,
      id: 2,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 1,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
