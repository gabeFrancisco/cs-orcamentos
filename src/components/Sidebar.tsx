import useAppStore from "../store/store";
import ItemCard from "./ItemCard";
import ItemForm from "./ItemForm";

function Sidebar() {
    const items = useAppStore((state) => state.orcamentoSimplesAtual?.items) ?? null;
    return (
        <div className="lg:w-3/5 2xl:w-1/3 flex m-3 flex-col bg-white text-zinc-700 rounded shadow-lg shadow-zinc-400">
            <div className="p-3 bg-zinc-800 border-b text-white text-center border-zinc-300 shadow-lg w-full rounded-tl rounded-tr">
                Gerenciador de Orçamentos
            </div>
            <div className="p-3">

                <div className="flex flex-col items-start mt-1">
                    <div className="w-full mt-3">
                        <label htmlFor="remetente" className="txt-label">Remetente</label>
                        <input name="remetente" type="text" className="txt-input" />
                    </div>
                </div>

                <div className="mt-5">
                    <label className="form-label">Itens</label>
                    <div className="form-section">
                        {/* Lista de items */}
                        <div>
                            {items?.map((el, index) => (
                                <ItemCard key={index} nome={el.nome} quantidade={el.quantidade} preco={el.preco} total={el.total} />
                            ))}
                        </div>
                        {/* ======================================== */}
                        <hr className="text-gray-200 mt-2" />
                        <ItemForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;