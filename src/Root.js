import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
