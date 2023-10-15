import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Page.css";

export default function Page() {
  return (
    <>
      <Header /> 
      <main className="page">
        <Outlet />
      </main>
    </>
  );
}
