import React, { useState } from "react";

import Avatar from "../Avatar/Avatar";

const Navigation = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className="flex justify-between">
                <Avatar />
                <div className="hidden md:flex">
                    {/* todo: refactor - put inside another component */}
                    <ul className="flex flex-row gap-10">
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <a href="#Introduction">Home</a>
                        </li>
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <a href="#About Me">About</a>
                        </li>
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <a href="#Skills">Skills</a>
                        </li>
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <a href="#Projects">Projects</a>
                        </li>
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <a href="#Companies">Companies</a>
                        </li>
                        <li className="transition-all ease-out hover:scale-110 cursor-pointer">
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden lg:hidden">
                    {!toggle ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 cursor-pointer"
                            onClick={() => setToggle(true)}
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 cursor-pointer float-right"
                            onClick={() => setToggle(false)}
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                    {/* todo: refactor - put inside another component */}
                    {toggle ? (
                        <ul className="flex flex-col mt-8 rounded-md bg-blue-100 p-2">
                            <li className="p-3 transition-all ease-out hover:scale-110 cursor-pointer">
                                <a href="#Introduction">Home</a>
                            </li>
                            <li className="p-3 transition-all ease-out hover:scale-110 cursor-pointer">
                                <a href="#About Me">About</a>
                            </li>
                            <li className="p-3 transition-all ease-out hover:scale-110 cursor-pointer">
                                <a href="#Skills">Skills</a>
                            </li>
                            <li className="p-3 transition-all ease-out hover:scale-110 cursor-pointer">
                                <a href="#Projects">Projects</a>
                            </li>
                            <li className="p-3 transition-all ease-out hover:scale-110 cursor-pointer">
                                <a href="#Companies">Companies</a>
                            </li>
                            <li className="p-3 transition-all ease-out hover:scale-110 cursor-pointer">
                                <a href="#Contact">Contact</a>
                            </li>
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
