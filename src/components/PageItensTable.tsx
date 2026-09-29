import useAppStore from "../store/store";
import { formatarMoeda } from "../utils/utils";

function PageItensTable() {
    const items = useAppStore((state) => state.orcamentoSimplesAtual.items)
    return (
        <table className="w-full table-fixed">
            <thead className="border  border-zinc-500 bg-zinc-200">
                <tr>
                    <th className="w-[6%]">Nº</th>
                    <th className="w-[42%]">Item</th>
                    <th className="w-[8%]">Qte.</th>
                    <th className="w-[12%]">Unidade</th>
                    <th className="w-[12%]">Total</th>
                </tr>
            </thead>
            <tbody className="border border-zinc-500 text-zinc-900">
                {items.map((el, index) => (
                    <tr className="border-b border-zinc-500" key={index}>
                        <th className="border-x border-zinc-500 text-zinc-800 px-1">{el.posicao}</th>
                        <td className="border-x border-zinc-500 px-1 wrap-break-word py-0.5">{el.nome}</td>
                        <td className="border-x border-zinc-500 px-1 py-0.5 text-center">{el.quantidade}</td>
                        <td className="border-x border-zinc-500 px-1 py-0.5 text-center">{formatarMoeda(el.preco)}</td>
                        <td className="border-x border-zinc-500 px-1 py-0.5 font-bold text-center">{formatarMoeda(el.total)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PageItensTable;