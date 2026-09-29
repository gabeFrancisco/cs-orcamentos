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
            prefixoDestinatario: config.prefixoDestinatario,
            localPadrao: config.localPadrao,
            responsavelPadrao: config.responsavelPadrao
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            setConfig({
                validadePadrao: values.validadePadrao,
                prefixoDestinatario: values.prefixoDestinatario,
                localPadrao: values.localPadrao,
                responsavelPadrao: values.responsavelPadrao
            })
            // formik.resetForm();
            props.onClose()
        }
    });

    useEffect(() => {
        if (config.validadePadrao !== formik.values.validadePadrao
            || config.prefixoDestinatario !== formik.values.prefixoDestinatario
            || config.localPadrao !== formik.values.localPadrao
            || config.responsavelPadrao !== formik.values.responsavelPadrao
        ) {
            setSaveBtn(true)
        }
        else {
            setSaveBtn(false)
        }
    }, [formik.values])

    return (
        <Modal open={props.open} title="Configurações" onClose={props.onClose}>
            <form onSubmit={formik.handleSubmit} className="pt-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="validadePadrao" className="txt-label">Validade padrão</label>
                        <input type="number" name="validadePadrao" value={formik.values.validadePadrao} onChange={formik.handleChange} id="validadePadrao" className="txt-input" />
                        <small className="text-zinc-600">Validade em "dias" de todos os novos orçamentos gerados.</small>
                    </div>
                    <div>
                        <label htmlFor="prefixoDestinatario" className="txt-label">Prefixo do remetente</label>
                        <input type="text" name="prefixoDestinatario" value={formik.values.prefixoDestinatario} onChange={formik.handleChange} id="prefixoDestinatario" className="txt-input" />
                        <small className="text-zinc-600">Frase padrão que irá antes de todos os destinatários.</small>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="localPadrao" className="txt-label">Local padrão</label>
                        <input className="txt-input" type="text" name="localPadrao" value={formik.values.localPadrao} onChange={formik.handleChange} />
                        <small className="text-zinc-600">Local que irá aparecer em todos os orçamentos.</small>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="responsavelPadrao" className="txt-label">Responsavel padrão</label>
                        <input className="txt-input" type="text" name="responsavelPadrao" value={formik.values.responsavelPadrao} onChange={formik.handleChange} />
                        <small className="text-zinc-600">Responsável técnico que irá aparecer em todos os orçamentos.</small>
                    </div>
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