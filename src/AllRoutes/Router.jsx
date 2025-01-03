import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Private from "../Component/Private";
import AddProduct from "../Component/AddProduct";
import Products from "../Component/Products";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>

        <Route
          path="/Products"
          element={
            <Private>
              <Products />
            </Private>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/AddProduct" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
