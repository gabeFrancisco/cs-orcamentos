import { create } from 'zustand';
import type { OrcamentoSimples } from '../models/OrcamentoSimples';
import type { Item } from '../models/Item';

type State = {
    orcamentoSimplesAtual: OrcamentoSimples | null,
    orcamentosSimples: OrcamentoSimples[]
}

type Action = {
    addItem: (item: Item) => void
    removeItem: (index: number) => void
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
    })
}))

export default useAppStore;