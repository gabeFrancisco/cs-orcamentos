import { create } from 'zustand';
import type { OrcamentoSimples } from '../models/OrcamentoSimples';
import type { Item } from '../models/Item';

type State = {
    orcamentoSimplesAtual: OrcamentoSimples | null,
    orcamentosSimples: OrcamentoSimples[]
}

type Action = {
    addItem: (item: Item) => void;
}

const useAppStore = create<State & Action>()((set) => ({
    orcamentoSimplesAtual: null,
    orcamentosSimples: [],
    addItem: (item) => set((state) => {
        if (!state.orcamentoSimplesAtual) {
            return state;
        }

        return {
            orcamentoSimplesAtual: {
                ...state.orcamentoSimplesAtual,
                items: [
                    ...state.orcamentoSimplesAtual.items,
                    item
                ]
            }
        }
    })
}))

export default useAppStore;