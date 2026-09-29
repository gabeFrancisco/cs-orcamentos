import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppStore from "../store/store";
import DestinatarioInput from "./DestinatarioInput";
import ItemCard from "./ItemCard";
import ItemForm from "./ItemForm";
import { faFilePdf, faGear, faList, faPrint } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ConfigModal from "./ConfigModal";
import ObservacoesInput from "./ObservacoesInput";
import DataInput from "./DataInput";
import ResponsavelInput from "./ResponsavelInput";
import LocalInput from "./LocalInput";
import { supabase } from "../lib/supabase";
import LogoutModal from "./LogoutModal";
import { formatarMoeda } from "../utils/utils";

function Sidebar() {
    const items = useAppStore((state) => state.orcamentoSimplesAtual?.items) ?? [];
    const orcamentoAtual = useAppStore((state) => state.orcamentoSimplesAtual);
    const [configModal, setConfigModal] = useState(false)
    const [email, setEmail] = useState("");
    const [logoutModal, setLogoutModal] = useState(false)

    useEffect(() => {
        async function getUser() {
            const { data, error } = await supabase.auth.getSession();

            if (error) {
                console.log(error)
                return;
            }

            setEmail(data.session.user.email)
        }

        getUser();
    })

    const total = orcamentoAtual.items.reduce((soma, item) => soma + item.total, 0)

    return (
        <>
            <LogoutModal open={logoutModal} onClose={() => setLogoutModal(false)} />
            <ConfigModal open={configModal} onClose={() => setConfigModal(false)} />
            <div className="lg:w-3/5 2xl:w-1/3 min-w-0 h-[calc(100dvh-1.5rem)] max-h-dvh flex m-3 flex-col bg-white text-zinc-700 rounded shadow-lg shadow-zinc-400">

                {/* Header */}
                <div className="p-2 bg-zinc-800 border-b flex flex-row justify-between items-center text-white text-center border-zinc-300 shadow w-full rounded-tl rounded-tr shrink-0">
                    <div>
                        <span className="ml-3">
                            {email}
                        </span>
                        <button type="button" onClick={() => setLogoutModal(true)} className="mx-2 text-sm text-red-300 hover:text-red-400">
                            Sair
                        </button>
                    </div>

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
                        <button type="button">
                            <FontAwesomeIcon
                                onClick={() => setConfigModal(true)}
                                className="rounded cursor-pointer p-1 hover:bg-white hover:text-zinc-800"
                                icon={faFilePdf}
                            />
                        </button>
                        <button type="button">
                            <FontAwesomeIcon
                                onClick={() => setConfigModal(true)}
                                className="rounded cursor-pointer p-1 hover:bg-white hover:text-zinc-800"
                                icon={faPrint}
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
                                Total: {formatarMoeda(total)}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-baseline mt-4">
                        <div>
                            <DataInput />
                        </div>
                        <div className="ml-2">
                            <LocalInput />
                        </div>
                        <div className="ml-2">
                            <ResponsavelInput />
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