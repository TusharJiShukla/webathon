import React from "react";
import Navbar from "../components/Navbar";
import InstituteInfo from "../components/InstituteInfo";
import NewsInfo from "../components/NewsInfo";
const Home = () => {
  return (
    <div>
      {/* Navbar with fixed positioning */}
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Content that scrolls under the Navbar */}
      <div className="pt-20 h-[100vh] w-[100vw] bg-blue-300">Home</div>
      <InstituteInfo></InstituteInfo>
      <NewsInfo></NewsInfo>
    </div>
  );
};

export default Home;
