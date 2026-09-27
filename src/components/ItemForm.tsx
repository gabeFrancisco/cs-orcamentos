import useAppStore from '../store/store';
import type { Item } from '../models/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik'
import * as Yup from 'yup';

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
                total: total,
                posicao: totalItems + 1
            };

            addItem(item);
            formik.resetForm();
        }
    })

    const style: React.CSSProperties = {
        borderColor: '#fb2c36'
    }

    const total = formik.values.quantidade * formik.values.preco;

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mt-3">
                <label htmlFor="nome" className="txt-label">Nome</label>
                <input style={formik.errors.nome && style} onChange={formik.handleChange} value={formik.values.nome} type="text" name="nome" className="txt-input" />
            </div>


            <div className="mt-5 flex flex-row ">
                <div>
                    <label htmlFor="quantidade" className="txt-label">Qte.</label>
                    <input style={formik.errors.quantidade && style} type="number" onChange={formik.handleChange} value={formik.values.quantidade} name="quantidade" className="txt-input" />
                </div>
                <div className="ml-3">
                    <label htmlFor="preco" className="txt-label">Preço</label>
                    <input style={formik.errors.preco && style} type="number" name="preco" onChange={formik.handleChange} value={formik.values.preco} className="txt-input" />
                </div>
                <div className="ml-3 flex-col w-1/2 items-center">
                    <div className="text-emerald-600 border rounded border-emerald-600 flex flex-row items-center">
                        <span className='font-bold p-1 text-white  bg-emerald-600'>Total: </span>
                        <span className="mx-1">R$ </span>
                        <div className="">{total.toFixed(2)}</div>
                    </div>
                </div>
            </div>

            <button type="submit" className="cursor-pointer mt-3 w-full btn btn-primary">
                <FontAwesomeIcon icon={faPlus} />
                Adicionar</button>
        </form>
    );
}

export default ItemForm;