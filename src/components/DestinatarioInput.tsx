import { useEffect, useState } from "react";
import useAppStore from "../store/store";

function DestinatarioInput() {
    const setDestinatario = useAppStore((state) => state.setDestinatario)
    const [valor, setValor] = useState("")
    useEffect(() => {
        const timer = setTimeout(() => {
            setDestinatario(valor)
        }, 500)

        return () => clearTimeout(timer)
    }, [valor])

    return (<div className="flex flex-col items-start mt-1">
        <div className="w-full mt-3">
            <label htmlFor="destinatario" className="txt-label">Destinatário</label>
            <input name="destinatario" value={valor} onChange={e => setValor(e.target.value)} type="text" className="txt-input" />
        </div>
    </div>);
}

export default DestinatarioInput;