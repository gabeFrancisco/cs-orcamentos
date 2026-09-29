import { create } from 'zustand';
import type { OrcamentoSimples } from '../models/OrcamentoSimples';
import type { Item } from '../models/Item';
import type { Configuracoes } from '../models/Configuracoes';
import type { User } from '@supabase/supabase-js';

type State = {
    orcamentoSimplesAtual: OrcamentoSimples | null,
    orcamentosSimples: OrcamentoSimples[],
    configuracoes: Configuracoes,
    user: User | null
}

type Action = {
    setUser: (user: User | null) => void,
    addItem: (item: Item) => void
    removeItem: (index: number) => void,
    setDestinatario: (destinatario: string) => void,
    setObservacoes: (observacoes: string) => void,
    setLocal: (local: string) => void,
    setData: (data: string) => void,
    setResponsavel: (responsavel: string) => void,
    setConfiguracoes: (config: Configuracoes) => void
}

const useAppStore = create<State & Action>()((set) => ({
    user: null,
    orcamentoSimplesAtual: {
        destinatario: '',
        items: [],
        total: 0,
        observacoes: '',
        validade: 0,
        data: "",
        local: 'São Francisco de Paula',
        responsavel: 'Gabriel',

    },
    orcamentosSimples: [],
    configuracoes: {
        validadePadrao: 30,
        prefixoDestinatario: '',
        localPadrao: "São Chico",
        responsavelPadrao: "Chico"
    },
    setUser: (user) => set({ user }),
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
    setObservacoes: (observacoes) => set((state) => {
        return {
            orcamentoSimplesAtual: {
                ...state.orcamentoSimplesAtual,
                observacoes: observacoes
            }
        }
    }),
    setLocal: (local) => set((state) => {
        return {
            orcamentoSimplesAtual: {
                ...state.orcamentoSimplesAtual,
                local: local
            }
        }
    }),
    setData: (data) => set((state) => {
        return {
            orcamentoSimplesAtual: {
                ...state.orcamentoSimplesAtual,
                data: data
            }
        }
    }),
    setResponsavel: (responsavel) => set((state) => {
        return {
            orcamentoSimplesAtual: {
                ...state.orcamentoSimplesAtual,
                responsavel: responsavel
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