import Logo from '../../public/logo.svg'
import useAppStore from '../store/store';
import { formatarMoeda } from '../utils/utils';
import PageItensTable from './PageItensTable';
import Subtitle from './Subtitle';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

function Page({ contentRef, showPage }: { contentRef, showPage: boolean }) {
    const orcamentoAtual = useAppStore((state) => state.orcamentoSimplesAtual)
    const config = useAppStore((state) => state.configuracoes)
    const total = orcamentoAtual.items.reduce((soma, item) => soma + item.total, 0)

    function formataData(data: string) {
        const [ano, mes, dia] = data.split("-");

        return `${dia}/${mes}/${ano}`;
    }

    return (
        <TransformWrapper
            initialScale={0.5}
            minScale={0.3}
            maxScale={2}
            centerOnInit
            wheel={{
                disabled: false,
                wheelDisabled: false,
                touchPadDisabled: true,
            }}

            pinch={{
                disabled: false,
                step: 5,
            }}

            panning={{
                disabled: false,
            }}

            doubleClick={{
                disabled: true,
            }}
        >
            <TransformComponent
                wrapperStyle={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <div style={{ fontSize: "14px" }} className={`${showPage ? 'block lg:block' : 'hidden lg:block'} bg-white shadow-lg shadow-zinc-400 rounded`}>
                    <div ref={contentRef} className='page'>
                        <div className='flex flex-row px-10 py-5 justify-between w-full'>
                            <img src={Logo} className='w-1/3 text-black object-contain' />
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
                                    <div className='font-bold mt-1 mb-2 text-lg'>
                                        {config.prefixoDestinatario} {orcamentoAtual.destinatario.length === 0
                                            ? <span className='text-zinc-500'>Destinatário</span>
                                            : orcamentoAtual.destinatario}
                                    </div>
                                    <hr className='text-zinc-500 mb-7' />

                                    <div>
                                        <PageItensTable />
                                    </div>

                                </div>
                                {orcamentoAtual.observacoes.length > 0 && (
                                    <>
                                        <Subtitle text='Observações' />
                                        <div className='px-10 text-zinc-900 py-3'>
                                            {orcamentoAtual.observacoes}
                                        </div>
                                    </>
                                )}
                                <div className='className="w-full my-4 border-t text-end text-zinc-900 text-xl border-zinc-500 border-b bg-zinc-200 px-10 py-0.5 font-bold'>
                                    TOTAL: {formatarMoeda(total)}
                                </div>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                {/* <Subtitle text='Informações adicionais' /> */}
                                <div className='pb-10 px-10 text-zinc-800'>
                                    <p className=''>Orçamento válido por {config.validadePadrao} dias!</p>
                                    <p className='font-bold'>{orcamentoAtual.local ?? ''}{orcamentoAtual.local && ", "} {formataData(orcamentoAtual.data)}</p>
                                    {orcamentoAtual.responsavel && (
                                        <div>
                                            <p className=''>Responsável Técnico: <b>{orcamentoAtual.responsavel}</b></p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
}

export default Page;