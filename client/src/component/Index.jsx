import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to={`/store/${63611}`}>Load Store Page</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  )
};

export default Index;