import { useEffect, useState } from "react";
import useAppStore from "../store/store";

function LocalInput() {
    const setLocal = useAppStore((state) => state.setLocal)
    const localStore = useAppStore((state) => state.orcamentoSimplesAtual.local)
    const [valor, setValor] = useState("")
    useEffect(() => {
        const timer = setTimeout(() => {
            setLocal(valor)
        }, 500)

        return () => clearInterval(timer)
    }, [valor])

    useEffect(() => setValor(localStore))

    return (
        <div>
            <label htmlFor="local" className="txt-label">Local</label>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} className="txt-input" />
        </div>
    );
}

export default LocalInput;