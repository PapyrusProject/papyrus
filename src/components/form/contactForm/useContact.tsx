// React hook form
import { useForm } from "react-hook-form";

// Types
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, schemaProps } from "./schema";

export const useContact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<schemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
  };
};
