import { Link, Outlet } from "react-router-dom";
import "./rootlayout.css";
import React from "react";

function RootLayout() {
  return (
    <div className="rootlayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>ECHO AI</span>
        </Link>
        <div className="user">
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
