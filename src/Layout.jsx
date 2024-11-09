import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;