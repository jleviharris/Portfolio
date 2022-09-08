import React from "react";
import AboutMe from "../../components/AboutMe/aboutMe";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <div className="homePageDiv">
      <div>
        <h1>Jonathan Harris</h1>
        <h2>Software Developer</h2>
      </div>
      <Navbar />
      {/* <AboutMe />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
