import useAppStore from '../store/store';
import type { Item } from '../models/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { formatarMoeda } from '../utils/utils';

function ItemForm() {
    const addItem = useAppStore((state) => state.addItem);
    const totalItems = useAppStore((state) => state.orcamentoSimplesAtual.items.length)

    const formik = useFormik({
        initialValues: {
            nome: "",
            posicao: 0,
            quantidade: 0,
            preco: 0
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: Yup.object({
            nome: Yup.string().required("Nome é obrigatório"),
            quantidade: Yup.number().min(1).required("Quantidade é obrigatório!"),
            preco: Yup.number().min(1).required("Preço é obrigatório")
        }),
        onSubmit: (values) => {
            const item: Item = {
                nome: values.nome,
                quantidade: values.quantidade,
                preco: values.preco,
                total: values.quantidade * values.preco,
                posicao: totalItems + 1
            };

            addItem(item);
            formik.resetForm();
        }
    })

    const total = formik.values.quantidade * formik.values.preco;
    const style: React.CSSProperties = {
        borderColor: '#fc4e68'
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mt-3">
                <label htmlFor="nome" className="txt-label">Nome</label>
                <input style={formik.errors.nome && style} onChange={formik.handleChange} value={formik.values.nome} type="text" name="nome" className="txt-input" />
            </div>


            <div className="mt-3 flex flex-row items-center">
                <div>
                    <label htmlFor="quantidade" className="txt-label">Qte.</label>
                    <input style={formik.errors.quantidade && style} type="number" onChange={formik.handleChange} value={formik.values.quantidade} name="quantidade" className="txt-input" />
                </div>
                <div className="ml-3">
                    <label htmlFor="preco" className="txt-label">Preço</label>
                    <input style={formik.errors.preco && style} type="number" name="preco" onChange={formik.handleChange} value={formik.values.preco} className="txt-input" />
                </div>
                <div className="ml-3 flex-col w-1/2 items-center">
                    <label className='txt-label text-emerald-700'>Total</label>
                    <div className="txt-input text-emerald-700 flex flex-row items-center">
                        <div className="">{formatarMoeda(total)}</div>
                    </div>
                </div>
                <button type="submit" className="cursor-pointer ml-1 btn btn-primary">
                    <FontAwesomeIcon icon={faPlus} /></button>
            </div>


        </form>
    );
}

export default ItemForm;