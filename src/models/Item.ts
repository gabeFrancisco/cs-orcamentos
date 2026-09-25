import type { Entidade } from "./Entidade";

export interface Item extends Entidade {
    nome: string,
    quantidade: number,
    preco: number,
    total: number,
    id_orcamento?: string
}