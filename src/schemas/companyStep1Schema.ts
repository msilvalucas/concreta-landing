import { z } from "zod";

export const companyStep1Schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  customerOrigin: z.array(z.string()).min(1, "Selecione pelo menos uma opção"),
});
