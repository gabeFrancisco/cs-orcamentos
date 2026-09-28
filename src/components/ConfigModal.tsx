import { useFormik } from "formik";
import Modal from "./Modal";
import useAppStore from "../store/store";
import { useEffect, useState } from "react";

interface ConfigModalProps {
    open: boolean,
    onClose: () => void
}

function ConfigModal(props: ConfigModalProps) {
    const config = useAppStore((state) => state.configuracoes);
    const setConfig = useAppStore((state) => state.setConfiguracoes);
    const [saveBtn, setSaveBtn] = useState(false)

    const formik = useFormik({
        initialValues: {
            validadePadrao: config.validadePadrao,
            prefixoDestinatario: config.prefixoDestinatario
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            setConfig({
                validadePadrao: values.validadePadrao,
                prefixoDestinatario: values.prefixoDestinatario
            })
            // formik.resetForm();
            props.onClose()
        }
    });

    useEffect(() => {
        console.log(config, formik.values)
        if (config.validadePadrao !== formik.values.validadePadrao || config.prefixoDestinatario !== formik.values.prefixoDestinatario) {
            setSaveBtn(true)
        }
        else {
            setSaveBtn(false)
        }
    }, [formik.values])

    return (
        <Modal open={props.open} title="Configurações" onClose={props.onClose}>
            <form onSubmit={formik.handleSubmit} className="pt-3">
                <div>
                    <label htmlFor="validadePadrao" className="txt-label">Validade padrão</label>
                    <input type="number" name="validadePadrao" value={formik.values.validadePadrao} onChange={formik.handleChange} id="validadePadrao" className="txt-input" />
                    <small>Validade em "dias" de todos os novos orçamentos gerados.</small>
                </div>
                <div className="mt-5">
                    <label htmlFor="prefixoDestinatario" className="txt-label">Prefixo do remetente</label>
                    <input type="text" name="prefixoDestinatario" value={formik.values.prefixoDestinatario} onChange={formik.handleChange} id="prefixoDestinatario" className="txt-input" />
                    <small>Frase padrão que irá antes de todos os destinatários, por exemplo: "Aos cuidados de..."</small>
                </div>
                <div className="flex flex-row items-center mt-3">
                    {/* <button className="btn btn-red w-full">Cancelar</button> */}
                    <button className="btn btn-green w-full enabled:cursor-pointer disabled:bg-zinc-400 disabled:border-zinc-300 disabled:text-zinc-100" disabled={!saveBtn}>Salvar!</button>
                </div>
            </form>
        </Modal>
    );
}

export default ConfigModal;