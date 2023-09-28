import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about-me" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;
