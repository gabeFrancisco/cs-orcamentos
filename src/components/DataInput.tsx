import { useEffect, useState } from "react";
import useAppStore from "../store/store";

function DataInput() {
    const hoje = new Date();

    const dataAtual =
        `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;

    const [data, setData] = useState(dataAtual)
    const setDataOrcamento = useAppStore((state) => state.setData);

    useEffect(() => {
        setDataOrcamento(dataAtual)
    }, [])

    function handleChange(event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        const novaData = event.target.value;

        setData(novaData);
        setDataOrcamento(novaData);
    }

    return (
        <>
            <label htmlFor="date" className="txt-label">Data</label>
            <input
                type="date"
                name="data"
                id="data"
                value={data}
                onChange={e => handleChange(e)}
                className="txt-input" />
        </>
    );
}

export default DataInput;