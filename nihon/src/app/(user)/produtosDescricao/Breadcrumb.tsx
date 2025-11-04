"use client"
import Link from "next/link";

export default function Breadcrumb({ productTitle = "Descrição Produto" }: { productTitle?: string }) {
  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:underline text-gray-500">Home</Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/produtos" className="hover:underline text-gray-500">Produtos</Link>
        </li>
        <li>/</li>
        <li className="font-medium text-gray-800">{productTitle}</li>
      </ol>
    </nav>
  );
}
