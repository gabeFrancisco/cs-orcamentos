import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form'
import useAppStore from '../store/store';
import type { Item } from '../models/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


interface FormData {
    nome: string,
    quantidade: number,
    preco: number
}

function ItemForm() {
    const { register, handleSubmit, control } = useForm<FormData>();

    register('quantidade', { valueAsNumber: true, value: 0 });
    register('preco', { valueAsNumber: true, value: 0 });

    const quantidade = useWatch({ control, name: 'quantidade' })
    const preco = useWatch({ control, name: 'preco' })

    const total = quantidade * preco;

    const addItem = useAppStore((state) => state.addItem);
    const totalItems = useAppStore((state) => state.orcamentoSimplesAtual.items.length)

    function onSubmit(data: FormData) {
        const item: Item = {
            nome: data.nome,
            quantidade: data.quantidade,
            preco: data.preco,
            total: total,
            posicao: totalItems + 1
        };

        addItem(item);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
                <label htmlFor="nome" className="txt-label">Nome</label>
                <input {...register('nome')} type="text" name="nome" className="txt-input" />
            </div>


            <div className="mt-5 flex flex-row ">
                <div>
                    <label htmlFor="quantidade" className="txt-label">Qte.</label>
                    <input {...register('quantidade')} type="number" name="quantidade" className="txt-input" />
                </div>
                <div className="ml-3">
                    <label htmlFor="preco" className="txt-label">Preço</label>
                    <input {...register('preco')} type="number" name="preco" className="txt-input" />
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