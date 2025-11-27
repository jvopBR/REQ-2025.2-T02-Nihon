import { fetchFirstImageOfProduct } from "@/lib/supabase/productPage";
import Link from "next/link";

type ProductProps = {
  name: string;
  idproduto: number;
};

export default async function Product({ name, idproduto }: ProductProps) {

  const urlImage = await fetchFirstImageOfProduct(idproduto);

  return (
    <div className="flex flex-col items-center py-2 px-2 w-full min-w-0 box-border">

      <Link href={`/product?id=${idproduto}`}>
        <a className="w-full rounded-3xl overflow-hidden shadow-[2px_4px_10px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 cursor-pointer min-w-0 block">
          {urlImage ? (
            <img
              src={urlImage}
              alt={name}
              className="w-full h-[130px] sm:h-[160px] md:h-[200px] lg:h-[260px] xl:h-[320px] object-cover block"
            />
          ) : (
            <div className="w-full h-[130px] sm:h-[160px] md:h-[200px] lg:h-[260px] xl:h-[320px] bg-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-500">Imagem indisponível</span>
            </div>
          )}
        </a>
      </Link>

      <p className="text-center text-[12px] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[20px] py-3 text-black w-full px-1 min-w-0 truncate">
        {name}
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-4 w-full">
        <Link href="/">
          <a className="w-full sm:w-auto min-w-0">
            <button className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-[12px] md:px-5 md:py-2.5 md:text-[13px] lg:px-6 lg:text-[14px] rounded-full shadow-[2px_4px_10px_rgba(0,0,0,0.2)] bg-[#ED3135] text-white transition-transform hover:scale-105">
              Saiba mais
            </button>
          </a>
        </Link>

        <Link href="/">
          <a className="w-full sm:w-auto text-center min-w-0">
            <span className="inline-block text-[12px] md:text-[13px] lg:text-[14px] text-[#ED3135]">
              Fazer pedido
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
