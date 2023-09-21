import { projects } from "../constants";

export const getProjects = () => {
    const projectList = projects;
    return projectList;
};

export const filterProject = (projectType) => {
    let filteredProject = getProjects().filter((t) => t.type === projectType);
    return filteredProject;
};
