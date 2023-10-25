// React hook form
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
// Types
import { schema, schemaProps } from "@/components/form/formLogin/schema";

export const useLogin = () => {
  // RHF - Config
  const {
    register,
    handleSubmit,
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
  const handleForm = (data: schemaProps) => {
    // POST request to send data
    //const response = axios.get('', {method='POST', headers='content-type': 'application', ...data})

    // #TODO tratar errors
    // #TODO LOADING in button
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        console.log(JSON.stringify(data));
      }, 5000);
  });
  };

  return {
    register,
    handleSubmit,
    errors,
    handleForm,
    isSubmitting
  };
};
