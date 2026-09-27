import useAppStore from "../store/store";

function PageItensTable() {
    const items = useAppStore((state) => state.orcamentoSimplesAtual.items)
    return (<table className="w-full">
        <thead className="border bg-zinc-200">
            <tr>
                <th>Nº</th>
                <td>Qte.</td>
                <td>Item</td>
                <td>Preço Unitário</td>
                <td>Total</td>
            </tr>
        </thead>
        <tbody>
            {items.map((el, index) => (
                <tr key={index}>
                    <th>{el.posicao}</th>
                    <td>{el.quantidade}</td>
                    <td>{el.nome}</td>
                    <td>{el.preco.toFixed(2)}</td>
                    <td>{el.total.toFixed(2)}</td>
                </tr>
            ))}
        </tbody>
    </table>);
}

export default PageItensTable;