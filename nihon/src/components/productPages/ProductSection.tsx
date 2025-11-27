import Product from "./Product";

type FirstProductSectionProps = {
  products: any[];
};

export default async function ProductSection({ products }: FirstProductSectionProps) {
  return (
    <section className="bg-white w-full max-w-7xl mx-auto rounded-3xl shadow-sm py-5 px-4 sm:px-6 lg:px-8 box-border overflow-hidden">
      <p className="text-black text-[13px] sm:text-[16px] lg:text-[22px] px-0 pb-6">Produtos relacionados:</p>

      <div className="grid gap-4 sm:gap-6 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
        {products.map((product) => (
          <Product key={product.idproduto} name={product.nome} idproduto={product.idproduto} />
        ))}
      </div>
    </section>
  );
}