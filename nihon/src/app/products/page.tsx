"use client";

import random from "random"; //Teste aleatório
import { useState, useEffect, useRef } from "react";


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
            behavior: "smooth", // rolagem suave
        });
    };

    const nextPage = () => {
        setPage(page+1);
        setEvenID(evenID+2);
        setOddID(oddID+2);
        scrollToTop();    
    }

    const previousPage = () => {
        setPage(page-1)
        setEvenID(evenID-2);
        setOddID(oddID-2);
        scrollToTop();    
    }

    const [amountProducts] = useState(() => random.int(0, 60)); //Teste de produtos aleatórios
    const [amountBrands] = useState(() => random.int(0, 13)); //Teste de marcas aleatórias
    const brands = new Array(amountBrands);
    for(let i = 0 ; i < amountBrands ; i++) {
        brands[i] = i+1;
    }

    const [products, setProducts] = useState([]); //Armazena os produtos

    //Endpoint conexão de produtos
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${amountProducts}`)
        .then(res => res.json())
        .then(data => setProducts(data.products))
        .catch(err => console.error(err));
    }, [amountProducts]);

    const groupedProducts: any[][] = [];
    for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
    }

    const groupedGroups: any[][][] = [];
    for (let i = 0; i < groupedProducts.length; i += 3) {
    groupedGroups.push(groupedProducts.slice(i, i + 3));
    }

    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const pages = Math.ceil(amountProducts / 18);
        setTotalPages(pages);
    }, [amountProducts]);



    return(
        <div className="h-auto w-full bg-[#F2F2F2]">
            <SearchBar/>
            {amountBrands && amountProducts ? (
            <>  
                <div className="py-10 mx-20">
                     <BrandSection brands={brands}/>
                </div>
                <div className="mx-20">
                    {groupedGroups[evenID] ? 
                        (<FirstProductSection groupedGroup={groupedGroups[evenID]} />) : 
                    (null)}
                </div>
                <div className="py-10">
                    <Banner/>
                </div>
                    
                {groupedGroups[oddID] ? (
                    <div className="mx-20 pb-5">
                        <SecondProductSection groupedGroup={groupedGroups[oddID]}/>
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