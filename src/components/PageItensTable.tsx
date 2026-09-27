import useAppStore from "../store/store";

function PageItensTable() {
    const items = useAppStore((state) => state.orcamentoSimplesAtual.items)
    return (
        <table className="w-full">
            <thead className="border  border-zinc-500 bg-zinc-200">
                <tr>
                    <th>Nº</th>
                    <td>Item</td>
                    <td>Qte.</td>
                    <td>Preço Unitário</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody className="border border-zinc-500 text-zinc-900">
                {items.map((el, index) => (
                    <tr className="border-b border-zinc-500" key={index}>
                        <th className="border-x border-zinc-500 text-zinc-800 px-1">#{el.posicao}</th>
                        <td className="border-x border-zinc-500 px-1 py-0.5">{el.nome}</td>
                        <td className="border-x border-zinc-500 px-1 py-0.5 text-center">{el.quantidade}</td>
                        <td className="border-x border-zinc-500 px-1 py-0.5 text-center">R$ {el.preco.toFixed(2)}</td>
                        <td className="border-x border-zinc-500 px-1 py-0.5 font-bold text-center">R$ {el.total.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PageItensTable;