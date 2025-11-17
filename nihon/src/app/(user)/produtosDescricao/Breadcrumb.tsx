"use client"
import React from "react";

export default function Breadcrumb({ productTitle }: { productTitle?: string }) {
  return (
    <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li>/</li>
        <li><a href="/produtos" className="hover:underline">Produtos</a></li>
        <li>/</li>
        <li className="font-semibold text-gray-800">{productTitle ?? "Produto"}</li>
      </ol>
    </nav>
  );
}
