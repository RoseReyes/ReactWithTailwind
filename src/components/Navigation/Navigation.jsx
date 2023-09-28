import React, { useState } from "react";

import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navigation = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="p-[20px]">
            <div className="flex justify-between">
                <Logo />
                <div className="hidden md:flex">
                    {/* todo: refactor - put inside another component */}
                    <ul className="flex flex-row gap-10">
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <Link to={"about-me"}>About</Link>
                        </li>
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <Link to={"skills"}>Skills</Link>
                        </li>
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <Link to={"projects"}>Projects</Link>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden lg:hidden static">
                    {!toggle ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => setToggle(true)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer float-right"
                            onClick={() => setToggle(false)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                    {/* todo: refactor - put inside another component */}
                    {toggle ? (
                        <ul className="flex flex-col mt-8 p-1 absolute right-6 rounded-md bg-orange-100 bg-opacity-100 text-[14px]">
                            <li className="p-2 transition-all ease-out hover:scale-110 cursor-pointer">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="p-2 transition-all ease-out hover:scale-110 cursor-pointer">
                                <Link to={"about-me"}>About</Link>
                            </li>
                            <li className="p-2 transition-all ease-out hover:scale-110 cursor-pointer">
                                <Link to={"skills"}>Skills</Link>
                            </li>
                            <li className="p-2 transition-all ease-out hover:scale-110 cursor-pointer">
                                <Link to={"projects"}>Projects</Link>
                            </li>
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
