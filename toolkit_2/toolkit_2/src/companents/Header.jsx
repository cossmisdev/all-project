import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>Todo</h1>
          <div className="h_text">
            <NavLink to="/list">
              <h2>LIST</h2>
            </NavLink>
            <NavLink to="/admin">
              <h2>ADMIN</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
