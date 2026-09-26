interface FormData {
    nome: string,
    quantidade: number,
    preco: number
}

function ItemForm() {
    return (
        <>
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
                <div className="ml-3">
                    <label htmlFor="total" className="txt-label -mt-4 bg-emerald-600 text-white">Total</label>
                    <div className="text-emerald-600 txt-input  border-emerald-600 flex flex-row items-center">
                        <span className="mr-1">R$ </span>
                        <div className="w-full">0,00</div>
                    </div>
                </div>
            </div>

            <button type="button" className="mt-3 w-full btn btn-primary">Adicionar</button>
        </>
    );
}

export default ItemForm;