// ZOD
import { z } from "zod";

export const schema = z.object({
    username: z.string().min(4, "Usuário precisa ter 4 digitos no mínimo."),
    password: z
      .string()
      .min(8, "Senha precisa preciso ter 8 caracteres.")
      .max(18, "Senha precisa ter menos de 18 caracterees"),
  });
  
  export type schemaProps = z.infer<typeof schema>;