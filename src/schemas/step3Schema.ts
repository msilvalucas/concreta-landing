import { z } from "zod";

export const schemaStep3 = z.object({
  companyName: z
    .string()
    .min(2, "O nome da empresa deve ter pelo menos 2 caracteres"),
  cnpj: z.string().optional(),
  creditTypes: z
    .array(z.string())
    .min(1, "Selecione pelo menos um tipo de crédito desejado"),
});
