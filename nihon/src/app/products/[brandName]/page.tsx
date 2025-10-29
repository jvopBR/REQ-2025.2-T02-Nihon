import { fetchAllProducts } from "@/lib/supabase/productPage";
import { filterProductsByName } from "@/lib/supabase/productPage";
import { fetchBrandsByProducts } from "@/lib/supabase/productPage";
import { filterProductsByBrand } from "@/lib/supabase/productPage";

import SearchBar from "@/components/productPages/SearchBar";
import BrandSection from "@/components/productPages/BrandSection"; 
import FirstProductSection from "@/components/productPages/FirstProductSection";
import Banner from "@/components/productPages/Banner"; 
import SecondProductSection from "@/components/productPages/SecondProductSection";
import ChangePage from "@/components/productPages/ChangePage";

export default async function Page({ params, searchParams }: {params: {brandName: string}, searchParams: { productName?: string, page?: string} }) {

  const brandName = decodeURIComponent(params.brandName);
  const productName = searchParams?.productName || null;
  const page = Number(searchParams.page) || 1;

  let products = await fetchAllProducts();
  products = await filterProductsByBrand(products, brandName);    

  if (productName) {
    products = filterProductsByName(products , productName);
  } 
 
  const brands =  await fetchBrandsByProducts(products); 
  const amountProducts = products ? products.length : 0;
  const amountBrands = brands ? brands.length : 0;
  const groupedProducts: any[][] = [];

  if(products) {
    for (let i = 0; i < products.length; i += 6) {
      groupedProducts.push(products.slice(i, i + 6));
    }
  }

  const totalPages =  Math.ceil(amountProducts / 12);
  const evenID = (page - 1) * 2;
  const oddID = evenID + 1;

   return(
        <div className="h-auto w-full bg-[#F2F2F2]">
            <SearchBar/>
            {amountBrands && amountProducts ? (
            <>  
                <div className="py-6 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
                     <BrandSection brands={brands} productName={productName} isOnBrandPage={true}/>
                </div>
                
                <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
                    {groupedProducts[evenID] ? 
                        (<FirstProductSection products={groupedProducts[evenID]} />) : 
                    (null)}
                </div>

                <div className="py-6">
                    <Banner/>
                </div>
                    
                {groupedProducts[oddID] ? (
                    <div className="mx-4 pb-5 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
                        <SecondProductSection products={groupedProducts[oddID]}/>
                    </div>) : 
                (null)}

                <div className="flex justify-center pb-5">
                    <ChangePage actualPage={page} lastPage={totalPages}/>
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