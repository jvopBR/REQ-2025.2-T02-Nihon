"use client";

import { useRouter } from "next/navigation";

type ProductProps = {
  name: string;
};

export default function Product({ name }: ProductProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px]">
      <div onClick={handleClick} className="
          h-40 sm:h-48 md:h-56
          w-full
          bg-gray-200 bg-cover bg-center
          shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
          rounded-3xl
          transition-transform hover:scale-105 cursor-pointer
        "
      ></div>

      <p className="text-base sm:text-lg md:text-xl text-center py-3 text-black">
        {name}
      </p>

      <div className="flex justify-between items-center w-full px-3 sm:px-4">
        <button
          onClick={handleClick}
          className="
            flex items-center justify-center
            shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
            bg-[#ED3135]
            px-4 sm:px-5
            py-2
            rounded-full
            text-white text-sm sm:text-base
            transition-transform hover:scale-105
          ">
          Saiba mais
        </button>

        <a href="#" className="
            text-[#ED3135]
            text-sm sm:text-base
            transition-transform hover:scale-105
          ">
          Fazer pedido
        </a>
      </div>
    </div>
  );
}
