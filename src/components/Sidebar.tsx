import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppStore from "../store/store";
import DestinatarioInput from "./DestinatarioInput";
import ItemCard from "./ItemCard";
import ItemForm from "./ItemForm";
import { faGear, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ConfigModal from "./ConfigModal";
import ObservacoesInput from "./ObservacoesInput";

function Sidebar() {
    const items = useAppStore((state) => state.orcamentoSimplesAtual?.items) ?? [];
    const orcamentoAtual = useAppStore((state) => state.orcamentoSimplesAtual);
    const [configModal, setConfigModal] = useState(false)

    const total = orcamentoAtual.items.reduce((soma, item) => soma + item.total, 0)

    return (
        <>
            <ConfigModal open={configModal} onClose={() => setConfigModal(false)} />
            <div className="lg:w-3/5 2xl:w-1/3 min-w-0 h-[calc(100dvh-1.5rem)] max-h-dvh flex m-3 flex-col bg-white text-zinc-700 rounded shadow-lg shadow-zinc-400">

                {/* Header */}
                <div className="p-2 bg-zinc-800 border-b flex flex-row justify-between items-center text-white text-center border-zinc-300 shadow w-full rounded-tl rounded-tr shrink-0">

                    <span className="ml-3">
                        Gerenciador de Orçamentos
                    </span>

                    <div className="flex flex-row justify-center">
                        <button type="button">
                            <FontAwesomeIcon
                                onClick={() => setConfigModal(true)}
                                className="rounded cursor-pointer p-1 hover:bg-white hover:text-zinc-800"
                                icon={faList}
                            />
                        </button>

                        <button type="button">
                            <FontAwesomeIcon
                                onClick={() => setConfigModal(true)}
                                className="rounded cursor-pointer p-1 hover:bg-white hover:text-zinc-800"
                                icon={faGear}
                            />
                        </button>
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-h-0 flex flex-col px-3 py-1">
                    <div className="flex flex-row items-baseline">
                        <div className="grow">
                            <DestinatarioInput />
                        </div>
                        <div>

                            <div className="rounded bg-emerald-100 border border-emerald-200 font-bold text-emerald-700 px-3 py-1 ml-2">
                                Total: R${total.toFixed(2)}
                            </div>
                        </div>
                    </div>


                    {/* Itens */}
                    <div className="mt-5 flex-1 min-h-0 flex flex-col">
                        <label className="form-label shrink-0">
                            Itens
                        </label>
                        <div className="form-section flex-1 min-h-0 flex flex-col">
                            <div className="flex-1 min-h-0 overflow-y-auto">

                                {items.map((el, index) => (
                                    <ItemCard
                                        key={index}
                                        nome={el.nome}
                                        quantidade={el.quantidade}
                                        preco={el.preco}
                                        posicao={el.posicao}
                                        total={el.total}
                                    />
                                ))}

                            </div>

                            {items.length >= 1 && (
                                <hr className="text-gray-200 mt-2 shrink-0" />
                            )}

                            {/* Formulário permanece visível */}
                            <div className="shrink-0">
                                <ItemForm />
                            </div>
                        </div>
                    </div>
                </div>
                <ObservacoesInput />
            </div>
        </>
    );
}

export default Sidebar;