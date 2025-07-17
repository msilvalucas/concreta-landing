import { z } from "zod";

export const schemaStep2 = z.object({
  cpf: z
    .string()
    .min(11, "CPF deve conter no mínimo 11 dígitos")
    .max(14, "CPF inválido")
    .regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido"),
  location: z.string().min(3, "Cidade/Estado é obrigatório"),
  birthDate: z.string().refine(
    (date) => {
      const parsed = new Date(date);
      return parsed instanceof Date && !isNaN(parsed.getTime());
    },
    {
      message: "Data de nascimento inválida",
    }
  ),
  incomeRange: z.string().min(1, "Selecione uma faixa de renda"),
});
