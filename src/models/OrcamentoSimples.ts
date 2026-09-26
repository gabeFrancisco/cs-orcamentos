import type { Entidade } from "./Entidade";
import type { Item } from "./Item";

export interface OrcamentoSimples extends Entidade {
    destinatario: string,
    items: Item[],
    total: number,
    observacao: string,
    validade: number,
    data: Date,
    local: string
}