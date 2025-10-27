"use client";

import random from "random";
import { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import BrandSection from "./BrandSection";
import FirstProductSection from "./FirstProductSection";
import Banner from "./Banner";
import SecondProductSection from "./SecondProductSection";
import ChangePage from "./ChangePage";

export default function Products() {
  const [page, setPage] = useState(1);
  const [evenID, setEvenID] = useState(0);
  const [oddID, setOddID] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    setPage(page + 1);
    setEvenID(evenID + 2);
    setOddID(oddID + 2);
    scrollToTop();  
  };

  const previousPage = () => {
    setPage(page - 1);
    setEvenID(evenID - 2);
    setOddID(oddID - 2);
    scrollToTop();
  };

  const [amountProducts] = useState(() => random.int(72, 72)); //Teste de produtos aleatórios
  const [amountBrands] = useState(() => random.int(11, 11)); //Teste de marcas aleatórias
  const brands = new Array(amountBrands).fill(0).map((_, i) => i + 1);
  for(let i = 0 ; i < amountBrands ; i++) {
      brands[i] = i+1;
  }

  const [products, setProducts] = useState([]); //Armazena os produtos

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${amountProducts}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, [amountProducts]);

  const groupedProducts: any[][] = [];
  for (let i = 0; i < products.length; i += 6) {
  groupedProducts.push(products.slice(i, i + 6));
  }

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(amountProducts / 12);
    setTotalPages(pages);
  }, [amountProducts]);

   return(
        <div className="h-auto w-full bg-[#F2F2F2]">
            <SearchBar/>
            {amountBrands && amountProducts ? (
            <>  
                <div className="py-6 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
                     <BrandSection brands={brands}/>
                </div>
                
                <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
                    {groupedProducts[evenID] ? 
                        (<FirstProductSection products={groupedProducts[evenID]} />) : 
                    (null)}
                </div>

                <div className="py-6 ">
                    <Banner/>
                </div>
                    
                {groupedProducts[oddID] ? (
                    <div className="mx-4 pb-5 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
                        <SecondProductSection products={groupedProducts[oddID]}/>
                    </div>) : 
                (null)}

                <div className="flex justify-center pb-5">
                    <ChangePage previousPage={previousPage} actualPage={page} lastPage={totalPages} nextPage={nextPage}/>
                </div>
            </>) : 
            (<>
                <h1 className="text-black text-center">Quantidade de Marcas: {amountBrands}</h1>
                <h1 className="text-black text-center">Quantidade de Produtos: {amountProducts}</h1>
                <h1 className="text-center text-black">Não encontramos nenhum produto!</h1>
            </>)}
        </div>
    );
}