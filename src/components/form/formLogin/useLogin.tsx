// React hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Types
import { schema, schemaProps } from "@/components/form/formLogin/schema";
import { SyntheticEvent } from "react";
import { signIn } from "next-auth/react";

export const useLogin = () => {
  // RHF - Config
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<schemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Function that send LOGIN data to NextAuth
  const handleForm = async (data: schemaProps, e: SyntheticEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      callbackUrl: "/",
    });

    if (!res?.ok) {
      reset();
      setError("root.serverError", { message: "Usuário não existe." });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleForm,
    isSubmitting,
  };
};
