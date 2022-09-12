import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <div className="homePageDiv">
      <div>
        <h1>JONATHAN HARRIS</h1>
        <h2>Software Developer</h2>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default HomePage;
