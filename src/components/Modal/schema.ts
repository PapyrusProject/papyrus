import { z } from "zod";

export const schema = z.object({
    username: z.string().min(4, "Usuário precisa ter 4 digitos no mínimo."),
    email: z.string().email('Digite um email valido').min(1,),
    message: z.string().min(5, 'A mensagem precisa ter no minimo 5 caracteres'),
});
//TODO REGEX

export type schemaProps = z.infer<typeof schema>;