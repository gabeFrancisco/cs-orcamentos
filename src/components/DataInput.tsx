import { useEffect, useState } from "react";
import useAppStore from "../store/store";

function DataInput() {
    const dataAtual = new Date().toISOString().split('T')[0];
    const [data, setData] = useState(dataAtual)
    const setDataOrcamento = useAppStore((state) => state.setData);

    useEffect(() => {
        setDataOrcamento(dataAtual);
    }, [])

    function handleChange(event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        setData(event.target.value)
        setDataOrcamento(data)
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