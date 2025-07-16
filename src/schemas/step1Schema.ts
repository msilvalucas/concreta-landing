import { z } from "zod";

export const schemaStep1 = z.object({
  name: z.string().min(3, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  incomeSources: z
    .array(z.string())
    .min(1, "Selecione pelo menos uma fonte de renda"),
});
