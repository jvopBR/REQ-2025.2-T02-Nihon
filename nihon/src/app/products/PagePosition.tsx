"use client";

type PagePositionProps = {
    actualPosition: number;
    pagePosition: number;
}

export default function PagePosition({ actualPosition, pagePosition }: PagePositionProps) {
    if(pagePosition === actualPosition) {
        return(
        <div className="bg-[#ED3135]  h-8 w-8 sm:h-10 sm:w-10
        shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
        rounded-full flex items-center justify-center scale-115
        transition-all duration-150">
            <p className="text-white">{pagePosition}</p>
        </div>
    );
    } else {
        return(
        <div className="bg-white h-8 w-8 sm:h-10 sm:w-10
        shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
        rounded-full flex items-center justify-center
        transition-all duration-150">
            <p className="text-[#ED3135]">{pagePosition}</p>
        </div>
    );
    }
}