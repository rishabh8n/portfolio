import "./index.scss";
import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
