// React hook form
import { useForm } from "react-hook-form";

// Types
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

export const useContact = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm({
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
    register,
    errors,
    isSubmitting,
  };
};
