"use client";

import { useState } from "react";

export default function StatusButton() {
    const [state, setState] = useState(true);
    const handleClick = () => {
        setState(!state);
    }
    return(
        <>
            {state ? (
                <div onClick={handleClick} className="h-10 w-20 rounded-full bg-[#ED3135] flex justify-end items-center pr-1 cursor-pointer">
                    <div className="h-8 w-8 bg-white rounded-full "></div>
                </div>
            ):(
                <div onClick={handleClick} className="h-10 w-20 rounded-full bg-gray-300 flex items-center pl-1 cursor-pointer">
                    <div className="h-8 w-8 bg-white rounded-full "></div>
                </div>
            )}
        </>
        
    );
}