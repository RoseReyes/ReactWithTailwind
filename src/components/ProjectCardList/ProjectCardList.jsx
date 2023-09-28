import React from "react";

const ProjectCardList = ({ projects }) => {
    return (
        <div className="flex flex-col w-auto px-32 mt-[20px] md:mt-[50px] md:ml-[40px] md:flex-row md:justify-center">
            {projects &&
                projects.map((pr, index) => (
                    <div
                        key={pr.id}
                        className="w-[225px] h-[275px] md:w-[250px] md:h-[340px] mr-5 mt-5 md:mt-0 rounded-md overflow-hidden shadow-lg bg-orange-100"
                    >
                        <img
                            className="w-full h-[200px] md:h-[225px] p-4 rounded-md"
                            src={pr.imageUrl}
                            alt="project_image"
                        />
                        <div className="px-1 md:px-5 text-center">
                            <p className="font-bold text-sm md:text-md">
                                {pr.title}
                            </p>
                            <p className="text-gray-700 text-normal text-[10px] p-1 md:text-base">
                                {pr.desc}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProjectCardList;
