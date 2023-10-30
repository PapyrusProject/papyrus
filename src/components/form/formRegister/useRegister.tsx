// React hook form
import { useForm } from "react-hook-form";

// Types
import { schemaProps } from "@/components/form/formRegister/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/components/form/formRegister/schema";
import { redirect } from "next/navigation";

export const useRegister = () => {
  // RHF - Config
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  // #TODO POST request for register usre
  const handleRegister = async (data: schemaProps) => {
    try {
      const res = await fetch(
        "https://papyrus-backend.onrender.com/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email,
            username: data.username,
            password: data.password
          }),
        }
      );
      const request = await res.json()
      if (res.ok) {
        redirect('/')
      } else {
        setError('root', request)
      }
      console.log(request)
      // #TODO tratar melhor os erros e retorno do 200
    } catch (err) {
      redirect('/')
    }
  };

  return {
    register,
    handleSubmit,
    handleRegister,
    errors,
    isSubmitting,
  };
};
