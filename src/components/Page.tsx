import Logo from '../../public/logo.svg'
import useAppStore from '../store/store';
import PageItensTable from './PageItensTable';
import Subtitle from './Subtitle';

function Page() {
    const orcamentoAtual = useAppStore((state) => state.orcamentoSimplesAtual)
    const config = useAppStore((state) => state.configuracoes)
    const total = orcamentoAtual.items.reduce((soma, item) => soma + item.total, 0)

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
            <div className=' flex flex-col justify-between grow'>
                <div className='flex flex-col justify-between grow'>
                    <div className='py-6 px-10 grow'>
                        <div className='font-bold mb-2 text-lg'>
                            {config.prefixoDestinatario} {orcamentoAtual.destinatario.length === 0
                                ? <span className='text-zinc-500'>Destinatário</span>
                                : orcamentoAtual.destinatario}
                        </div>
                        <hr className='text-zinc-500 mb-4' />

                        <div>
                            <PageItensTable />
                        </div>

                    </div>
                    {orcamentoAtual.observacoes.length > 0 && (
                        <>
                            <Subtitle text='Observações' />
                            <div className='px-5 py-3'>
                                {orcamentoAtual.observacoes}
                            </div>
                        </>
                    )}
                    <div className='className="w-full my-4 border-t text-end text-zinc-900 text-lg border-zinc-500 border-b bg-zinc-200 px-10 py-0.5 font-bold'>
                        TOTAL: R${total.toFixed(2)}
                    </div>
                </div>
                <div>
                    {/* <Subtitle text='Informações adicionais' /> */}
                    <div className='mt-5 pb-12 px-10 text-zinc-800'>
                        <p className=''>Orçamento válido por {config.validadePadrao} dias!</p>
                        <p className='italic font-bold'>Porto Alegre, {new Date(orcamentoAtual.data).toLocaleDateString("pt-BR")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;