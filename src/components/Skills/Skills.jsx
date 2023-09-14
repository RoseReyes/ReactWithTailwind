import { skillsList, workDetail } from "../../constants";

import React from "react";
import { skill } from "../../assets";

const Skills = () => {
    return (
        <div className="md:mt-[70px]">
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
            <div className="flex flex-col gap-20 md:flex-row justify-center">
                <div class="grid grid-rows-3 grid-flow-col-dense justify-item-center gap-10 mt-10">
                    {skillsList.map((skill, index) => (
                        <img
                            src={skill.icon}
                            alt="img1"
                            key={skill.id}
                            className="h-[50px] w-[50px] rounded-full bg-blue-100 p-2 transition-all delay-150 duration-300 ease-in-out hover:scale-150"
                        ></img>
                    ))}
                </div>
                <div class="grid grid-rows-3 grid-flow-col-dense justify-item-center gap-10 mt-10">
                    {skillsList.map((skill, index) => (
                        <img
                            src={skill.icon}
                            alt="img1"
                            key={skill.id}
                            className="h-[50px] w-[50px] rounded-full bg-blue-100 p-2 transition-all delay-150 duration-300 ease-in-out hover:scale-150"
                        ></img>
                    ))}
                </div>
                {/* <div class="grid grid-cols-5 grid-flow-row-dense justify-items-center md:mt-[40px] text-[23px]">
                    {skillsList.map((skill, index) => (
                        <img
                            src={skill.icon}
                            alt="img1"
                            key={skill.id}
                            className="h-[50px] w-[50px] rounded-full bg-blue-100 p-2 transition-all delay-150 duration-300 ease-in-out hover:scale-150"
                        ></img>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Skills;
