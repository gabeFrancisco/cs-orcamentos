import { useEffect, useState } from "react";
import useAppStore from "../store/store";

function ObservacoesInput() {
    const setObservacoes = useAppStore((state) => state.setObservacoes);
    const [valor, setValor] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setObservacoes(valor)
        }, 500)

        return () => clearTimeout(timer)
    }, [valor])

    return (
        <div className="px-3 my-5 shrink-0">

            <label
                htmlFor="observacoes"
                className="txt-label"
            >
                Observações
            </label>

            <textarea className="txt-input" value={valor} onChange={e => setValor(e.target.value)} />

        </div>
    );
}

export default ObservacoesInput;