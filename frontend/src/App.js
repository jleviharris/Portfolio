// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import Resume from "./pages/Resume/Resume";
import PreviousJobs from "./pages/PreviousJobs/PreviousJobs";
import PersonalLife from "./pages/PersonalLife/PersonalLife";
import Comments from "./pages/Comments/Comments";
import Projects from "./pages/Projects/Projects";

// Component Imports
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="bodyImg">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/previousJobs" element={<PreviousJobs />} />
        <Route path="/personalLife" element={<PersonalLife />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
