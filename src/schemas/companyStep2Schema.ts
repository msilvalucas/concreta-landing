import { z } from "zod";

export const companyStep2Schema = z.object({
  cpf: z.string().min(1, "CPF é obrigatório"),
  cityState: z.string().min(1, "Cidade/Estado é obrigatório"),
  cnpj: z.string().min(1, "CNPJ é obrigatório"),
  companyDescription: z.string().min(1, "Descrição da empresa é obrigatória"),
  creditNeeds: z
    .array(z.string())
    .min(1, "Selecione pelo menos uma faixa de crédito"),
  providedProducts: z
    .array(z.string())
    .min(1, "Selecione pelo menos um produto ou serviço"),
});
