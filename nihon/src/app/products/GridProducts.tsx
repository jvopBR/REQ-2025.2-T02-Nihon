import Product from "./Product";

type GridProductsProps = {
    groupProducts: any[];
}

export default function GridProducts({groupProducts}: GridProductsProps) {
    return(
        <div className="px-10 py-5 flex justify-center gap-48">
            {groupProducts.map((product)=>(
                <Product key={product.id} name={product.title}/>
            ))}
        </div>
    );
}