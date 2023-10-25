// React hook form
import { useForm } from "react-hook-form";

// Types
import { schemaProps } from "@/components/form/formLogin/schema";

export const useLogin = () => {
  // RHF - Config
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
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
    
    console.log(JSON.stringify(data));
  };

  return {
    register,
    handleSubmit,
    errors,
    handleForm,
  };
};
