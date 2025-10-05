"use client";

import { SlArrowRight } from "react-icons/sl";
import { ArrowBigRight, ArrowRightFromLine } from 'lucide-react';


import { useRouter } from "next/navigation";

type RedirectProps = {
    title: string;
    url: string;
}

export default function Redirect( { title, url }: RedirectProps) {
    
    const router = useRouter();

    const handleClick = () => {
        router.push(url);
    };

    return(
        <div className="w-full">
            <div onClick={handleClick} className="flex items-center justify-between py-5 mx-15 transform transition duration-150 hover:scale-102">
                <h1 className="text-secondary text-[20px] font-bold">{title}</h1>
                <ArrowRightFromLine color="white" />
            </div>
        </div>
    );
}