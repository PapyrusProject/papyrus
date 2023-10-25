import { z } from "zod";

export const schema = z
  .object({
    email: z.string().email().min(1, "Digite corretamente o email."),
    username: z.string().min(4, "Usuário precisa ter 4 digitos no mínimo."),
    password: z
      .string()
      .min(8, "Senha precisa preciso ter 8 caracteres.")
      .max(18, "Senha precisa ter menos de 18 caracterees"),
    confirmPassword: z.string().min(8, "As senhas precisam estar iguais!"),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "As senhas precisam estar iguais!",
      path: ["confirmPassword"],
    }
  );
//#TODO REGEX

export type schemaProps = z.infer<typeof schema>;