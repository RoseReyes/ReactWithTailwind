import React from "react";
import { avatar } from "../../assets";

const Avatar = () => {
    return (
        <img
            src={avatar}
            className="h-[45px] w-[45px] pl-[3px] rounded-full ring-2 ring-avatar-border"
            alt="logo"
        ></img>
    );
};

export default Avatar;
