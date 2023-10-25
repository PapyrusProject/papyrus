"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useLogin } from "@/components/form/formLogin/useLogin";



export const LoginForm = () => {
  const {errors, handleForm, handleSubmit, register} = useLogin()

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        type="text"
        {...register("username")}
        error={errors.username?.message}
      />
      <Input
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Button variant="blue" type="submit">
        Entrar
        </Button>
    </form>
  );
};
