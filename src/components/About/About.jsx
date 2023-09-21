import { AppText, aboutSection } from "../../constants";
import { laptop, wave } from "../../assets";

import React from "react";

const About = () => {
    return (
        <div className="mt-36">
            <img src={wave} alt="wave" className="w-screen absolute" />
            <img
                src={laptop}
                alt="laptop"
                className="absolute w-[200px] mt-[-90px] md:mt-[-140px] md:w-[300px]"
            />
            <div className="h-[300px] bg-primary-tangerine text-center">
                <h2 className="text-[50px] text-skill-subtext pt-20 md:pt-6 font-bold">
                    {AppText.About}{" "}
                    <span className="text-black">{AppText.Me}</span>
                </h2>
                <h2 className="text-skill-subtext mt-1 px-9 text-sm md:text-base md:px-64 md:mt-[40px] lg:px-80">
                    {AppText.aboutMeDescription}
                </h2>
            </div>
            <div
                className="flex flex-col mt-[-40px] md:mt-[-40px] md:flex-row justify-around 
            items-center px-32"
            >
                {aboutSection.map((item, index) => (
                    <div className="group hover:bg-primary-tangerine mb-5 p-7 rounded-2xl">
                        <img
                            src={item.image}
                            alt="card"
                            className="w-[230px] h-[230px] object-cover 
                            rounded-lg"
                        />
                        <div className="w-[230px] pb-[20px]">
                            <h2 className="font-bold group-hover:text-orange-100">
                                {item.title}
                            </h2>
                            <h2 className="text-[12px] text-gray-500 group-hover:text-skill-subtext">
                                {item.desc}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
