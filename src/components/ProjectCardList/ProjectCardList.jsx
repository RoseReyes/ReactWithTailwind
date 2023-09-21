import React from "react";

const ProjectCardList = ({ projects }) => {
    return (
        <div
            className="flex flex-col mt-[20px] md:mt-[50px] md:flex-row justify-around 
        items-center px-32"
        >
            {projects &&
                projects.map((pr, index) => (
                    <div className="w-[225px] h-[275px] md:w-[250px] md:h-[340px] mr-5 mt-5 md:mt-0 rounded-md overflow-hidden shadow-lg bg-orange-100">
                        <img
                            className="w-full h-[200px] md:h-[225px] p-4 rounded-md"
                            src={pr.imageUrl}
                            alt="sunset"
                        />
                        <div class="px-1 md:px-5 text-center">
                            <p class="font-bold text-sm md:text-md">
                                {pr.title}
                            </p>
                            <p class="text-gray-700 text-normal text-[10px] p-1 md:text-base">
                                {pr.desc}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProjectCardList;
