import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTopArrow from "./Components/ScrollToTopArrow/ScrollToTopArrow";
import Footer from "./Components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTopArrow />
      <Footer />
    </>
  );
}

export default RootLayout;
