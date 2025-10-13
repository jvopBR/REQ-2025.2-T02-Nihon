"use client";

type NextPageProps = {
    actualPosition: number;
    lastPosition: number;
    onClickCallback: () => void;
}

export default function NextPage({ actualPosition, lastPosition, onClickCallback }: NextPageProps) {
    if(lastPosition === actualPosition) {
        return(
        <div className="bg-gray-200 h-10 w-28 sm:h-12 sm:w-36 md:w-40 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rounded-full flex items-center justify-center transition-all duration-150">
            <p className="text-[#ED3135] text-sm sm:text-base font-medium">Próxima Página</p>
        </div>
    );
    } else {
        return(
        <div onClick={onClickCallback} className="bg-[#ED3135] h-10 sm:h-12 w-28 sm:w-36 md:w-40 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rounded-full flex items-center justify-center transition-all duration-150">
            <p className="text-white text-sm sm:text-base font-medium">Próxima Página</p>
        </div>
    );
    }
}