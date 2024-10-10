import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Layout = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
