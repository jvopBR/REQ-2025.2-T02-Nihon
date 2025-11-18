import React from "react";

export default function Product({ product }: { product: any }) {
  return (
    <article
      className="product-card w-full min-w-0 flex flex-col bg-white rounded-lg p-3 shadow-sm box-border overflow-hidden"
      role="article"
    >
      <div className="image-wrapper w-full flex justify-center items-center overflow-hidden flex-shrink-0">
        <img
          src={product?.imageUrl || "/placeholder.png"}
          alt={product?.name || "Produto"}
          loading="lazy"
          className="product-image w-full max-w-full h-40 sm:h-44 md:h-36 lg:h-40 object-contain"
        />
      </div>

      <div className="info mt-2 flex-1 min-w-0">
        <h3 className="text-sm leading-tight text-gray-800 break-words">
          {product?.name}
        </h3>
        {/* preço / botões */}
      </div>
    </article>
  );
}