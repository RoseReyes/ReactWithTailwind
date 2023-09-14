import "./index.css";

import About from "./components/About/About";
import Introduction from "./components/Introduction/Introduction";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
    return (
        <div className="p-[20px]">
            {/* Nav Bar */}
            <Navigation />

            {/* Intro */}
            <Introduction />

            {/* About Me */}
            <About />

            {/* Skills */}
            <Skills />

            {/* Projects */}
            {/* <Projects /> */}

            {/* Contact */}

            {/* Footer */}
        </div>
    );
};

export default App;
