import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import "./root.css";

interface RootProps {}

export const Root: React.FunctionComponent<RootProps> = () => {
  return (
    <>
      <div className="page-bg">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
