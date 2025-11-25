
type ProductInfoProps = {   
    nome: string | undefined,
    tipo: string | undefined, 
    statusProduto: boolean | undefined, 
    nomeFornecedor: string | null;
}

export function ProductInfo({nome, tipo, statusProduto, nomeFornecedor}: ProductInfoProps) {
    return(
    <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-2">Características do Produto</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>Nome:</strong> {nome ?? "—"}</li>
          <li><strong>Tipo:</strong> {tipo ?? "—"}</li>
          <li><strong>Fornecedor:</strong> {nomeFornecedor ?? "—"}</li>
          <li><strong>Status:</strong> {statusProduto ? "Disponível em estoque" : "Indisponível"}</li>
        </ul>
    </div>

    );
}

export function ProductDescription({ descricao }: { descricao: string | undefined }) {  
    return(
    <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-2">Descrição do Produto</h3>
        <p className="text-sm text-gray-700">{descricao ?? "Sem descrição disponível."}</p>
    </div>
      );
}