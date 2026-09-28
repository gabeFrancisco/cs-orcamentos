import type { Entidade } from "./Entidade";
import type { Item } from "./Item";

export interface OrcamentoSimples extends Entidade {
    destinatario: string,
    items: Item[],
    total: number,
    observacoes?: string,
    validade: number,
    data: string,
    local?: string,
    responsavel?: string
}