import React from "react";
import { robo } from "../../assets";

const Projects = () => {
    return (
        <div>
            <div className="flex flex-row justify-center mt-6">
                <h2 className="text-[50px] text-black font-bold p-3">
                    My Creative
                    <span className="text-primary-tangerine font-bold">
                        {" "}
                        Projects
                    </span>
                </h2>
                <img
                    className="h-[90px] w-[90px] animate-bounce"
                    src={robo}
                    alt="robot"
                />
            </div>
        </div>
    );
};

export default Projects;
