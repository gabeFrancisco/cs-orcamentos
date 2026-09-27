import type { Entidade } from "./Entidade";

export interface Item extends Entidade {
    nome: string,
    posicao: number,
    quantidade: number,
    preco: number,
    total: number,
    id_orcamento?: string
}