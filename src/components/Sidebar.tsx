import ItemCard from "./ItemCard";

function Sidebar() {
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
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                        </div>
                        {/* ======================================== */}
                        <hr className="text-gray-200 mt-2" />
                        <div className="mt-5">
                            <label htmlFor="nome" className="txt-label">Nome</label>
                            <input type="text" name="nome" className="txt-input" />
                        </div>


                        <div className="mt-5 flex flex-row justify-between">
                            <div>
                                <label htmlFor="quantidade" className="txt-label">Qte.</label>
                                <input type="number" name="quantidade" className="txt-input" />
                            </div>
                            <div className="ml-3">
                                <label htmlFor="preco" className="txt-label">Preço</label>
                                <input type="number" name="preco" className="txt-input" />
                            </div>
                        </div>

                        <button type="button" className="mt-3 w-full btn btn-primary">Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;