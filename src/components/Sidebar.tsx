function Sidebar() {
    return (
        <div className="w-1/2 flex flex-col bg-white text-zinc-700 rounded shadow-lg shadow-zinc-400">
            <div className="p-3 bg-zinc-800 border-b text-white text-center border-zinc-300 shadow-lg w-full rounded-tl rounded-tr">
                Gerenciador de Orçamentos
            </div>
            <div className="p-4 flex flex-col items-start">
                <div className="w-full mt-3">
                    <label htmlFor="remetente" className="txt-label">Remetente</label>
                    <input name="remetente" type="text" className="txt-input" />
                </div>
            </div>
            <hr className="text-zinc-300" />
            <div className="p-4">
                <label className="form-label">Itens</label>
                <div className="form-section">

                </div>
            </div>
        </div>
    );
}

export default Sidebar;