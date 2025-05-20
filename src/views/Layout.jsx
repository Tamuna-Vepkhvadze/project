import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      Layout
      <header>HEADER</header>
      <br />
      <Outlet />
      <br />
      <footer>Footer</footer>
    </div>
  );
};
