import React from "react";
import { Outlet } from "react-router-dom";
import "./Page.css";
import Header from "./Header";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
