import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faTag, faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface ItemCardProps {
    posicao?: number,
    nome: string,
    quantidade: number,
    preco: number,
    total: number
}

function ItemCard(props: ItemCardProps) {
    return (
        <div className="bg-gray-50 text-sm hover:bg-sky-100 cursor-pointer flex items-center shadow border border-zinc-300 rounded p-3 w-full my-2">
            <input type="checkbox" name="isVisible" id="isVisible" className="shrink-0" />

            {/* O nome do item vai truncar com reticências quando não houver espaço */}
            <span className="mx-1 truncate min-w-0 flex-1">
                {props.nome}
            </span>

            <div className='p-1 bg-gray-200 border border-gray-300 rounded mr-1'>
                <FontAwesomeIcon className='text-slate-500' icon={faHashtag} />
                <span className=" shrink-0">{props.quantidade}</span>
            </div>

            <div className='p-1 bg-blue-100 border border-blue-300 rounded mr-1'>
                <FontAwesomeIcon className='text-blue-500' icon={faTag} />
                <span className=" text-blue-700 shrink-0">R${props.preco.toFixed(2)}</span>
            </div>

            <div className='p-1 bg-emerald-100 border border-emerald-300 rounded mr-1'>
                <FontAwesomeIcon className='text-emerald-700' icon={faDollarSign} />
                <span className=" text-emerald-700 shrink-0">R${props.preco.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default ItemCard;