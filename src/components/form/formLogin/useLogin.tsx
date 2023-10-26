// React hook form
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
// Types
import { schema, schemaProps } from "@/components/form/formLogin/schema";
import React from "react";
import { useGet } from "@/hooks/useFetch";
import { api } from "@/services/api";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export const useLogin = () => {
  // RHF - Config
  const {
    register,
    handleSubmit,
    watch,
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

  // Send LOGIN request to API
  const handleForm = async (data: schemaProps) => {
    const res = await signIn('credentials',{
      redirect: false,
      username: data.username,
      password: data.password,
    })

    if (res?.error) {
      console.log('usuário não existe')
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleForm,
    isSubmitting
  };
};
