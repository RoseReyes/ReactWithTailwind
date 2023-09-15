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
            <div className="flex flex-col gap-10 md:flex-row justify-center">
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
                <div class="grid grid-rows-5 justify-item-end gap-5 mt-10">
                    {workDetail.map((work, index) => (
                        <div key={work.id}>
                            <p className="font-bold">{work.year}</p>
                        </div>
                    ))}
                </div>
                <div class="grid grid-rows-5 justify-item-center gap-5 mt-10">
                    {workDetail.map((work, index) => (
                        <div key={work.id}>
                            <p className="font-bold">{work.position}</p>
                            <p className="text-[12px]">{work.companyName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
