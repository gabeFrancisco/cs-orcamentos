import { useFormik } from "formik";
import Modal from "./Modal";

interface ConfigModalProps {
    open: boolean,
    onClose: () => void
}

function ConfigModal(props: ConfigModalProps) {
    const formik = useFormik({
        initialValues: {
            validadePadrao: 30,
            prefixoDestinatario: ""
        },
        onSubmit: () => {

        }
    });
    return (
        <Modal open={props.open} title="Configurações" onClose={props.onClose}>
            <form action="" className="pt-3">
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
                    <button className="btn btn-green w-full">Salvar!</button>
                </div>
            </form>
        </Modal>
    );
}

export default ConfigModal;