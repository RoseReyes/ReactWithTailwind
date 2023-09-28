import { skillsList, workDetail } from "../../constants";

import React from "react";
import { skill } from "../../assets";

const Skills = () => {
    return (
        <div className="mt-[60px]">
            <div className="flex flex-row justify-center">
                <img
                    className="h-[90px] md:h-[100px] hover:animate-shake"
                    src={skill}
                    alt="skill"
                />
                <h2 className="text-black font-bold text-[50px] md:mt-[20px]">
                    Skills &{" "}
                    <span className="text-primary-tangerine">Experties</span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 justify-items-center">
                <div className="grid grid-rows-3 grid-flow-col-dense gap-10 md:ml-[250px] p-10">
                    {skillsList.map((skill, index) => (
                        <img
                            key={skill.id}
                            src={skill.icon}
                            alt="img1"
                            className="h-[50px] w-[50px] rounded-full bg-blue-100 p-2 transition-all delay-150 duration-300 ease-in-out hover:scale-150"
                        ></img>
                    ))}
                </div>
                <div className="grid grid-cols-10 grid-flow-row-dense justify-items-start ml-11 md:p-0 md:mr-[200px] md:pl-2 md:mt-10">
                    {workDetail.map((work, index) => (
                        <p
                            key={work.id}
                            className="col col-span-10 font-bold text-base/loose"
                        >
                            {work.year}
                            <span className="ml-10">
                                {work.position}{" "}
                                <span className="font-regular">
                                    - {work.companyName}
                                </span>
                            </span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
