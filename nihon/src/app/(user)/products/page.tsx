import { fetchAllProducts } from "@/lib/supabase/productPage";
import { filterProductsByName } from "@/lib/supabase/productPage";
import { fetchBrandsByProducts } from "@/lib/supabase/productPage";

import SearchBar from "@/components/productPages/SearchBar";
import BrandSection from "@/components/productPages/BrandSection";
import FirstProductSection from "@/components/productPages/FirstProductSection";
import Banner from "@/components/productPages/Banner";
import SecondProductSection from "@/components/productPages/SecondProductSection";
import ChangePage from "@/components/productPages/ChangePage";

export default async function Page({ searchParams }: { searchParams: { productName?: string, page?: string} }) {

  // aguarda searchParams antes de usar (resolve problema: "searchParams should be awaited")
  const params = await (searchParams as any);
  const productName = params?.productName ?? null;
  let page = Number(params?.page) || 1;
  if (page < 1) page = 1;

  let products = await fetchAllProducts();

  if (productName) {
    products = filterProductsByName(products ,productName);
  }

  const brands =  await fetchBrandsByProducts(products);
  const amountProducts = products ? products.length : 0;
  const amountBrands = brands ? brands.length : 0;

  // paginação: 12 itens por página
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(amountProducts / pageSize));
  if (page > totalPages) page = totalPages;

  // fatia os produtos para a página atual (sempre tenta preencher até 12)
  const startIndex = (page - 1) * pageSize;
  const pageItems = (products || []).slice(startIndex, startIndex + pageSize);

  // divide em duas seções (cada componente espera até 8 itens)
  const firstEight = pageItems.slice(0, 8);
  const secondFour = pageItems.slice(8, 12);

  return(
    <div className="h-auto w-full bg-[#F2F2F2]">
      <SearchBar/>
      {amountBrands && amountProducts ? (
      <>
        <div className="py-6 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
          <BrandSection brands={brands} productName={productName}/>
        </div>

        <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
          {/* seção superior (até 8 itens) */}
          <FirstProductSection products={firstEight} />
        </div>

        <div className="mx-4 mt-8 pb-5 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
          {/* seção inferior (até 4 itens) */}
          <SecondProductSection products={secondFour}/>
        </div>

        <div className="flex justify-center pb-5">
          <ChangePage actualPage={page} lastPage={totalPages} productName={productName}/>
        </div>

        <div className="py-6">
          <Banner/>
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