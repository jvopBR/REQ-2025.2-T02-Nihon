import Product from "./Product";

type GridProductsProps = {
  groupProducts: any[];
};

export default function GridProducts({ groupProducts }: GridProductsProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-5">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
        {groupProducts.map((product) => (
          <Product key={product.id} name={product.title} />
        ))}
      </div>
    </div>
  );
}
