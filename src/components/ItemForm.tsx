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
            </div>

            <button type="button" className="mt-3 w-full btn btn-primary">Adicionar</button>
        </>
    );
}

export default ItemForm;