import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./nav-row.sass";

const NavRow = () => {
  return (
    <nav className="row navigation-row">
      <NavLink className="nav-link" to={"/"} exact>
        Home
      </NavLink>
      <NavLink className="nav-link" to={"/headphones"}>
        Headphones
      </NavLink>
      <NavLink className="nav-link" to={"/speakers"}>
        Speakers
      </NavLink>
      <NavLink className="nav-link" to={"/earphones"}>
        Earphones
      </NavLink>
    </nav>
  );
};

export default NavRow;
