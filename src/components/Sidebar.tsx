import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppStore from "../store/store";
import DestinatarioInput from "./DestinatarioInput";
import ItemCard from "./ItemCard";
import ItemForm from "./ItemForm";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ConfigModal from "./ConfigModal";

function Sidebar() {
    const items = useAppStore((state) => state.orcamentoSimplesAtual?.items) ?? [];
    const [configModal, setConfigModal] = useState(false)

    return (
        <>
            <ConfigModal open={configModal} onClose={() => setConfigModal(false)} />
            <div className="lg:w-3/5 2xl:w-1/3 min-w-0 h-[calc(100dvh-1.5rem)] max-h-dvh flex m-3 flex-col bg-white text-zinc-700 rounded shadow-lg shadow-zinc-400">

                {/* Header */}
                <div className="p-2 bg-zinc-800 border-b flex flex-row justify-between items-center text-white text-center border-zinc-300 shadow w-full rounded-tl rounded-tr shrink-0">

                    <span className="grow">
                        Gerenciador de Orçamentos
                    </span>

                    <button type="button">
                        <FontAwesomeIcon
                            onClick={() => setConfigModal(true)}
                            className="rounded cursor-pointer p-1 hover:bg-white hover:text-zinc-800"
                            icon={faGear}
                        />
                    </button>

                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-h-0 flex flex-col px-3 py-1">

                    <DestinatarioInput />

                    {/* Itens */}
                    <div className="mt-5 flex-1 min-h-0 flex flex-col">

                        <label className="form-label shrink-0">
                            Itens
                        </label>

                        <div className="form-section flex-1 min-h-0 flex flex-col">

                            {/* Lista com scroll */}
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

                {/* Observações permanece visível */}
                <div className="px-3 my-5 shrink-0">

                    <label
                        htmlFor="observacoes"
                        className="txt-label"
                    >
                        Observações
                    </label>

                    <textarea className="txt-input" />

                </div>

            </div>
        </>
    );
}

export default Sidebar;