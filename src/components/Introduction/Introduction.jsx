import { avatar, homeImage } from "../../assets";

import { AppText } from "../../constants";
import React from "react";

const Introduction = () => {
    return (
        <div className="mt-7 px-4 md:px-20 flex flex-col justify-evenly md:flex-row">
            <div>
                <h1 className="text-[40px] font-bold">{AppText.hello}</h1>
                <h1 className="text-[40px] font-bold">
                    {AppText.Iam}
                    <span className="text-primary-tangerine">
                        {AppText.RoseReyes}
                    </span>
                </h1>
                <h1 className="text-gray-400 mt-3">
                    {AppText.aboutMeShortDescription}
                </h1>
                <button className="bg-primary-tangerine mt-4 text-white p-2 px-3 rounded-md transition-all ease-in-out hover:scale-110">
                    Resume
                </button>
            </div>
            <img
                src={avatar}
                alt="home"
                className="h-[175px] w-[175px] rounded-full p-1 ring  ring-avatar-border mt-7 ml-[100px] md:ml-0"
            />
        </div>
    );
};

export default Introduction;
