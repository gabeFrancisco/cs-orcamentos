function ItemCard() {
    return (
        <div className="bg-gray-50 hover:bg-blue-100 cursor-pointer flex items-center shadow border border-zinc-300 rounded p-3 w-full my-2">
            <input type="checkbox" name="isVisible" id="isVisible" className="shrink-0" />

            {/* O nome do item vai truncar com reticências quando não houver espaço */}
            <span className="mx-1 truncate min-w-0 flex-1">
                Instalação de fechadura
            </span>

            <span className="mx-1 shrink-0">Q: 1</span>
            <span className="mx-1 text-blue-700 shrink-0">U: R$100.00</span>
            <span className="mx-1 text-green-700 shrink-0">T: R$100.00</span>
        </div>
    );
}

export default ItemCard;