import React, { useEffect, useState } from "react";
import { filterProject, getProjects } from "../../utils/utils";

import ProjectCardList from "../ProjectCardList/ProjectCardList";
import { projectButtons } from "../../constants";
import { robo } from "../../assets";

const Projects = () => {
    const [filteredProjects, SetFilteredProjects] = useState(null);

    useEffect(() => {
        SetFilteredProjects(getProjects());
    }, []);

    const handleProject = (e) => {
        let typeOfProject = e.target.value;

        if (typeOfProject !== "all") {
            SetFilteredProjects(filterProject(typeOfProject));
        } else {
            SetFilteredProjects(getProjects());
        }
    };

    return (
        <div className="mt-[80px]">
            <div className="flex flex-row justify-center ml-3 md:ml-[230px]">
                <h2 className="text-[50px] text-black font-bold p-3">
                    My Creative
                    <span className="text-primary-tangerine font-bold">
                        {" "}
                        Projects
                    </span>
                </h2>
                <img
                    className="mt-10 mr-[95px] h-[70px] w-[70px] animate-bounce"
                    src={robo}
                    alt="robot"
                />
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row w-[500px] md:ml-20 justify-around">
                    {projectButtons.map((item, index) => (
                        <button
                            key={item.id}
                            value={item.type}
                            onClick={handleProject}
                            className="w-[100px] h-[30px] p-1 outline text-primary-tangerine
                            outline-primary-tangerine rounded hover:bg-primary-tangerine
                            hover:text-white active:bg-primary-tangerine
                            active:text-white font-bold text-sm"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            <ProjectCardList projects={filteredProjects} />
        </div>
    );
};

export default Projects;
