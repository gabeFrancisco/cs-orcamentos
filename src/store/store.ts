import { create } from 'zustand';
import type { OrcamentoSimples } from '../models/OrcamentoSimples';
import type { Item } from '../models/Item';
import type { Configuracoes } from '../models/Configuracoes';

type State = {
    orcamentoSimplesAtual: OrcamentoSimples | null,
    orcamentosSimples: OrcamentoSimples[],
    configuracoes: Configuracoes
}

type Action = {
    addItem: (item: Item) => void
    removeItem: (index: number) => void,
    setDestinatario: (destinatario: string) => void,
    setConfiguracoes: (config: Configuracoes) => void
}

const useAppStore = create<State & Action>()((set) => ({
    orcamentoSimplesAtual: {
        destinatario: '',
        items: [],
        total: 0,
        observacao: '',
        validade: 0,
        data: new Date(),
        local: '',
    },
    orcamentosSimples: [],
    configuracoes: {
        validadePadrao: 30,
        prefixoDestinatario: '',
    },
    addItem: (item) => set((state) => {
        // if (!state.orcamentoSimplesAtual) {
        //     return state;
        // }

        return {
            orcamentoSimplesAtual: {
                ...state.orcamentoSimplesAtual,
                items: [
                    ...state.orcamentoSimplesAtual.items,
                    item
                ]
            }
        }
    }),
    removeItem: (index) => set((state) => {
        const items = state.orcamentoSimplesAtual.items.filter(item => item.posicao !== index)
        return {
            orcamentoSimplesAtual: {
                ...state.orcamentoSimplesAtual,
                items: items
            }
        }
    }),
    setDestinatario: (destinatario) => set((state) => {
        return {
            orcamentoSimplesAtual: {
                ...state.orcamentoSimplesAtual,
                destinatario: destinatario
            }
        }
    }),
    setConfiguracoes: (config) => set(() => {
        return {
            configuracoes: config
        }
    })
}))

export default useAppStore;