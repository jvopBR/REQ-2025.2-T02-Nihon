"use client";

type PreviousPageProps = {
    onClickCallback: () => void;
    actualPosition: number;
}

export default function PreviousPage({onClickCallback, actualPosition }: PreviousPageProps) {
    if(1 === actualPosition) {
        return(
        <div className="bg-gray-200  shadow-[2px_4px_10px_rgba(0,0,0,0.2)] 
        h-[30px] w-[70px] text-[8px]
        min-[375px]:h-[30px] min-[375px]:w-[75px] min-[375px]:text-[9.5px]
        min-[390px]:w-[85px] min-[390px]:text-[11px]
        md:h-[35px] md:w-[100px] md:text-[12.5px]
        lg:h-[40px] lg:w-[120px] lg:text-[14px] 
        rounded-full flex text-nowrap items-center justify-center">
            <p className="text-[#ED3135]">Página Anterior</p>
        </div>
    );
    } else {
        return(
        <div onClick={onClickCallback} className="bg-[#ED3135] 
        h-[30px] w-[70px] text-[8px]
        min-[375px]:h-[30px] min-[375px]:w-[75px] min-[375px]:text-[9.5px]
        min-[390px]:w-[85px] min-[390px]:text-[11px]
        md:h-[35px] md:w-[100px] md:text-[12.5px]
        lg:h-[40px] lg:w-[120px] lg:text-[14px] 
        shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rounded-full flex text-nowrap items-center justify-center transition hover:scale-110 duration-150">
            <p className="text-white">Página Anterior</p>
        </div>
    );
    }
}