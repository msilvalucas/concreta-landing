import { z } from "zod";

export const companyStep3Schema = z.object({
  monthlyRevenue: z.array(z.string()).min(1, "Selecione o faturamento mensal"),
  drogariaRevenue: z
    .array(z.string())
    .min(1, "Selecione o faturamento com a Drogaria Araújo"),
  salesFrequency: z
    .array(z.string())
    .min(1, "Selecione a periodicidade de vendas"),
  supplierTime: z.array(z.string()).min(1, "Selecione o tempo como fornecedor"),
  creditTypes: z
    .array(z.string())
    .min(1, "Selecione pelo menos um tipo de crédito"),
  guarantees: z
    .array(z.string())
    .min(1, "Selecione pelo menos uma garantia ou informe que não possui"),
  hasInvoices: z
    .array(z.string())
    .min(1, "Responda se possui notas de outros clientes"),
});
