"use client";

import { useRouter } from "next/navigation";

type ProductProps = {
    name: string;
}

export default function Product({name}: ProductProps) {
  
        const router = useRouter();
    
        const handleClick = () => {
            router.push("/");
        };
  
    return (
    <div className=" flex-col w-75">
        <div onClick ={handleClick} className="h-75 w-75 bg-cover shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rounded-3xl transition hover:scale-105"></div>
        <p className="text-[20px] text-center py-5">{name}</p>
        <div className="flex justify-between items-center w-75 px-8">

            <div className="flex items-center justify-center shadow-[2px_4px_10px_rgba(0,0,0,0.2)] bg-[#ED3135] w-25 h-10 rounded-full transition hover:scale-105">
                <a href="/" className="text-white text-[15px]">Saiba mais</a>
            </div>
            
            <a href="" className="text-[#ED3135] text-[15px] transition hover:scale-105">Fazer pedido</a>
        </div>
    </div>
  );
}