"use client";

type NextPageProps = {
    actualPosition: number;
    lastPosition: number;
    onClickCallback: () => void;
}

export default function NextPage({ actualPosition, lastPosition, onClickCallback }: NextPageProps) {
    if(lastPosition === actualPosition) {
        return(
        <div className="bg-gray-200 h-10 w-40 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rounded-full flex items-center justify-center">
            <p className="text-[#ED3135]">Próxima Página</p>
        </div>
    );
    } else {
        return(
        <div onClick={onClickCallback} className="bg-[#ED3135] h-10 w-40 shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rounded-full flex items-center justify-center transition hover:scale-105">
            <p className="text-white">Próxima Página</p>
        </div>
    );
    }
}