import About from "../About/About";
import { Fragment } from "react";
import Introduction from "../Introduction/Introduction";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <Fragment>
            <Introduction />
            <About />
            <Skills />
            <Projects />
        </Fragment>
    );
};

export default Home;
