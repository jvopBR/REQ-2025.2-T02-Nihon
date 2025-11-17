"use client"
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Gallery from "./Gallery";
import Breadcrumb from "./Breadcrumb";
import ProductInfo from "./ProductInfo";
import SimilarProducts from "./SimilarProducts";
import { createClient } from "@/lib/supabase/client";

export default function ProductDescriptionPage() {
  const defaultImages = [
    "/images/Banner_site_nihon.png",
    "/images/Leitor VSI 410 Toledo.png",
    "/images/automacao.png",
    "/images/mercado.png",
  ];

  const [product, setProduct] = useState<any | null>(null);
  const [images, setImages] = useState<string[]>(defaultImages);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // memoiza o client
  const supabase = useMemo(() => createClient(), []);

  // useSearchParams para reagir a mudanças de ?id= quando navegar via Link
  const searchParams = useSearchParams();

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      setError(null);

      try {
        // lê id do hook do Next.js (atualiza quando Link muda a query)
        const idParam = searchParams?.get("id");

        let prodResp;
        if (idParam) {
          prodResp = await supabase
            .from("produto")
            .select("*")
            .eq("idproduto", Number(idParam))
            .maybeSingle();
        } else {
          // pega o produto mais recente (por idproduto decrescente)
          prodResp = await supabase
            .from("produto")
            .select("*")
            .order("idproduto", { ascending: false })
            .limit(1)
            .maybeSingle();
        }

        const { data: prodData, error: prodError } = prodResp as any;
        if (prodError) {
          console.error("Erro ao buscar produto:", prodError);
          setError(prodError.message || "Erro ao buscar produto");
          setLoading(false);
          return;
        }

        if (!prodData) {
          setError("Nenhum produto encontrado");
          setProduct(null);
          setImages(defaultImages);
          setLoading(false);
          return;
        }

        // normaliza o produto para compatibilidade com seus componentes
        const normalized = {
          id: prodData.idproduto,
          title: prodData.nome ?? prodData.title ?? "",
          description: prodData.descricao ?? prodData.description ?? "",
          tipo: prodData.tipo,
          status: prodData.status,
          raw: prodData,
        };
        setProduct(normalized);

        // busca imagens na tabela imagem_produto
        const imgResp = await supabase
          .from("imagem_produto")
          .select("url")
          .eq("idproduto", prodData.idproduto)
          .order("posicao", { ascending: true });

        const { data: imgData, error: imgError } = imgResp as any;
        if (imgError) {
          console.warn("Erro ao buscar imagens:", imgError);
          // não retorna erro completo, apenas usa default images
          setImages(defaultImages);
        } else if (imgData && imgData.length) {
          const urls = imgData.map((r: any) => r.url).filter(Boolean);
          setImages(urls.length ? urls : defaultImages);
        } else {
          setImages(defaultImages);
        }
      } catch (e: any) {
        console.error("Erro inesperado ao carregar produto:", e);
        setError(e?.message ?? "Erro inesperado");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [supabase, searchParams?.toString()]);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <Breadcrumb productTitle={product?.title ?? "Produto Balança Comercial para Uso de Exemplo"} />

        <div className="bg-white rounded-lg p-6 shadow">
          {error && <div className="mb-4 text-red-600">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
            <div className="sm:col-span-1 md:col-span-2">
              <Gallery images={images} />
            </div>

            <div className="sm:col-span-1 md:col-span-1 md:sticky md:top-24">
              <ProductInfo product={product} loading={loading} />
            </div>
          </div>

          <div className="mt-8">
            <SimilarProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
