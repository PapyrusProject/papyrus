// React hook form
import { useForm } from "react-hook-form";

// Types
import { schemaProps } from "@/components/form/formRegister/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/components/form/formRegister/schema";
import { api } from "@/services/api";
import axios from "axios";

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
        const user = {email: data.email, username: data.username, password: data.password}
        try {
          const request = await axios.post('https://papyrus-backend.onrender.com/v1/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
          })

          const res = await request.data

          if(res.ok){
            console.log(res)
          }

        }catch(err){
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