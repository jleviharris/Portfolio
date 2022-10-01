// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";

// Component Imports
import AboutMe from "./components/AboutMe/aboutMe";
import ContactMe from "./pages/Contact/contactMe";
import AshesToVanity from "./components/Projects/AshesToVanity";
import Sk8Status from "./components/Projects/Sk8Status";
import GameOfLife from "./components/Projects/GameOfLife";
import OldPortfolio from "./components/Projects/OldPortfolio";
import CurrentPortfolio from "./components/Projects/CurrentPortfolio";
import DaysOfJavaScript from "./components/Projects/100DaysOfJavaScript";
import CryptoSite from "./components/Projects/CryptoSite";
import TicTacToe from "./components/Projects/TicTacToe";

function App() {
  return (
    <div className="bodyImg">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/AshesToVanity" element={<AshesToVanity />} />
        <Route path="/Sk8Status" element={<Sk8Status />} />
        <Route path="/OldPortfolio" element={<OldPortfolio />} />
        <Route path="/CurrentPortfolio" element={<CurrentPortfolio />} />
        <Route path="/GameOfLife" element={<GameOfLife />} />
        <Route path="/100DaysOfJavaScript" element={<DaysOfJavaScript />} />
        <Route path="/CryptoSite" element={<CryptoSite />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;
