import { useEffect, useState } from "react";
import useAppStore from "../store/store";

function ResponsavelInput() {
    const setResponsavel = useAppStore((state) => state.setResponsavel);
    const responsavelStore = useAppStore((state) => state.orcamentoSimplesAtual.responsavel)
    const [valor, setValor] = useState("")
    useEffect(() => {
        const timer = setTimeout(() => {
            setResponsavel(valor)
        }, 500)

        return () => clearTimeout(timer)
    }, [valor])

    useEffect(() => setValor(responsavelStore), [])

    return (
        <div className="w-full">
            <label htmlFor="responsavel" className="txt-label">Responsável</label>
            <input name="responsavel" value={valor} onChange={e => setValor(e.target.value)} className="txt-input" />
        </div>
    );
}

export default ResponsavelInput;