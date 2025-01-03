import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Products">Product</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/AddProduct">AddProduct</NavLink>
    </div>
  );
}

export default Navbar;
