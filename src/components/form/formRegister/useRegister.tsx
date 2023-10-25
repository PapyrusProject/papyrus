// React hook form
import { useForm } from "react-hook-form";

// Types
import { schemaProps } from "@/components/form/formLogin/schema";

export const useRegister = () => {
    // RHF - Config
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "all",
        criteriaMode: "all",
        defaultValues: {
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        },
      });
    
      // #TODO POST request for register usre
      const handleRegister = (data: schemaProps) => {
        console.log(JSON.stringify(data));
      };

    return{
        register,
        handleSubmit,
        handleRegister,
        errors
    }
}