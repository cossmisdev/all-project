import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UserTable from "./compament/UserTable/UserTable.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="userTable" element={<UserTable />} />
    </Routes>
    <App />
  </BrowserRouter>
);
