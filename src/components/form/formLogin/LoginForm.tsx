"use client";
// Hooks
import { useLogin } from "@/components/form/formLogin/useLogin";

// Components
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {ImSpinner8} from 'react-icons/im'

export const LoginForm = () => {
  const {errors, handleForm, handleSubmit, register, isSubmitting} = useLogin()

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col items-center justify-center">
      <Input
        type="text"
        variant={errors.username ? 'error' : 'default'}
        disabled={isSubmitting}
        {...register("username")}
        error={errors.username?.message}
      />
      <Input
        type="password"
        variant={errors.password ? 'error' : 'default'}
        disabled={isSubmitting}
        {...register("password")}
        error={errors.password?.message}
      />
      <Button variant={isSubmitting ? 'loading' : 'blue'} type="submit" disabled={isSubmitting}>
        {isSubmitting && <span className="animate-spin"><ImSpinner8 /></span>}
        Entrar
        </Button>
    </form>
  );
};
