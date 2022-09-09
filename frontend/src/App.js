// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";

// Component Imports
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/aboutMe";
import ContactMe from "./pages/Contact/contactMe";
import Project1 from "./components/Projects/project1";
import Project2 from "./components/Projects/project2";
import Project3 from "./components/Projects/project3";
import Project4 from "./components/Projects/project4";
import Project5 from "./components/Projects/project5";

function App() {
  return (
    <div className="bodyImg">
      {/* <Header />
      <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
      </Routes>
    </div>
  );
}

export default App;
