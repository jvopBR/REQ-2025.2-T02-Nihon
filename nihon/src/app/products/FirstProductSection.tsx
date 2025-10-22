"use client";
import Product from "./Product";

type FirstProductSectionProps = {
  products: any[];
};

export default function FirstProductSection({ products }: FirstProductSectionProps) {
  return (
    <section className="bg-white w-full max-w-7xl mx-auto rounded-3xl shadow-sm py-5">
      <p className="text-black text-[13px] 
      min-[375px]:text-[14.5px] 
      min-[390px]:text-[16px] 
      min-[405px]:text-[17.5px] 
      min-[420px]:text-[19px]
      lg:text-[22px]
      xl:text-[24px]
      px-[25px] 
      pb-[25px]">Produtos relacionados</p>


      <div className="flex flex-wrap justify-between gap-3 px-[25px]">
        {products.map((product) => (
          <Product key={product.id} name={product.title} />
        ))}
      </div>
    </section>
  );
}
