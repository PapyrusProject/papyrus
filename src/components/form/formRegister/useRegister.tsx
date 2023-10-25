// React hook form
import { useForm } from "react-hook-form";

// Types
import { schemaProps } from "@/components/form/formLogin/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/components/form/formRegister/schema";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export const useRegister = () => {
    // RHF - Config
    const {
        register,
        handleSubmit,
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
        try{
          const response = await api.post('/auth/register',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          const userInfo = await response.data
          console.log(userInfo)
        }catch(err){
          //#TODO Tratar melhor erro
          console.log('error: ', err)
        }
      };

    return{
        register,
        handleSubmit,
        handleRegister,
        errors,
        isSubmitting
    }
}