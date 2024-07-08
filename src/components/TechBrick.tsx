"use client"
import React, { useState } from "react";

const delays: string[] = [
    "delay-0",
    "delay-75",
    "delay-100",
    "delay-150",
    "delay-200",
    "delay-300",
    "delay-500",
    "delay-700",
    "delay-1000",
];

interface Props {
    name: string,
    index: number,
    pop: (item: string) => void
}

function TechBrick({ name, pop, index }: Props) {
    const [clicked, setClicked] = useState(false);

    const str = `${delays[index]}`;
    const animation = clicked ? "xl:animate-fade-right-out" : "";
    // console.log("str = ", str);

    return (
        <div
            onClick={(e) => {
                setClicked(true);
            }}
            onAnimationEnd={() => {
                pop(name);
                setClicked(false);
            }}
            className={`p-1 xl:p-0 w-[48%] sm:w-[23%] xl:w-full text-center text-black 
            text-sm xl:text-base 2xl:text-lg 
            font-medium bg-lightblue rounded-sm 
            group-hover:transform 
            group-hover:translate-y-[-10px] 
            group-hover:scale-1
            duration-100
            cursor-pointer
            ${animation}
            ${str}`}>
            {
                name
            }
        </div>
    )
}

export default TechBrick;