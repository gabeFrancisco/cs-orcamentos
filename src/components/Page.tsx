import Logo from '../../public/logo.svg'
import useAppStore from '../store/store';
import PageItensTable from './PageItensTable';
import Subtitle from './Subtitle';

function Page() {
    const orcamentoAtual = useAppStore((state) => state.orcamentoSimplesAtual)
    return (
        <div className="bg-white shadow-lg shadow-zinc-400 rounded page">
            <div className='flex flex-row p-10 justify-between w-full'>
                <img src={Logo} className='w-1/3 text-black' />
                <div className='flex flex-col items-center text-sm'>
                    <p><b>Confiança - Qualidade - Garantia</b></p>
                    <p><i>www.chaveirosul.com.br</i></p>
                    <p>CNPJ: 07.843.688/0001-10 IE: 096/3118242</p>
                    <p>Av. Farrapos, nº 1549 - Floresta - POA/RS</p>
                    <p>Fone: 51984184141</p>
                    <p>chaveirosul@hotmail.com</p>
                </div>
            </div>
            <Subtitle text='Orçamento' />
            <div className='p-6 '>

                <span className='font-bold'>{orcamentoAtual.destinatario}</span>
                <div>
                    <PageItensTable />
                </div>
            </div>
        </div>
    );
}

export default Page;