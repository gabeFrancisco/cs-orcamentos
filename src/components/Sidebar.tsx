import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppStore from "../store/store";
import DestinatarioInput from "./DestinatarioInput";
import ItemCard from "./ItemCard";
import ItemForm from "./ItemForm";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    const items = useAppStore((state) => state.orcamentoSimplesAtual?.items) ?? [];
    return (
        <div className="lg:w-3/5 2xl:w-1/3 max-h-dvh flex m-3 flex-col bg-white text-zinc-700 rounded shadow-lg shadow-zinc-400">
            <div className="p-2 bg-zinc-800 border-b flex flex-row justify-between items-center text-white text-center border-zinc-300 shadow w-full rounded-tl rounded-tr">
                <span className="grow"> Gerenciador de Orçamentos</span>
                <button type="button">
                    <FontAwesomeIcon className="rounded cursor-pointer p-1 hover:bg-white hover:text-zinc-800" icon={faGear} />
                </button>
            </div>
            <div>

            </div>
            <div className="px-3 py-1">

                <DestinatarioInput />
                <div className="mt-5">
                    <label className="form-label">Itens</label>
                    <div className="form-section">
                        {/* Lista de items */}
                        <div className="overflow-y-auto max-h-64">
                            {items.map((el, index) => (
                                <ItemCard
                                    key={index}
                                    nome={el.nome}
                                    quantidade={el.quantidade}
                                    preco={el.preco}
                                    posicao={el.posicao}
                                    total={el.total} />
                            ))}
                        </div>
                        {items.length >= 1 && <hr className="text-gray-200 mt-2" />}
                        <ItemForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;