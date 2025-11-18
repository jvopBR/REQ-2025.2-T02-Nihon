import React from "react";
import Product from "./Product";

export default function FirstProductSection({ products }: { products: any[] }) {
  if (!products || products.length === 0) return null;

  return (
    <section>
      <div className="products-grid w-full max-w-full min-w-0 grid gap-4 justify-items-stretch
                      grid-cols-2
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4">
        {products.map((p) => (
          <div key={p.id ?? p.product_id ?? Math.random()} className="w-full min-w-0">
            <Product product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}