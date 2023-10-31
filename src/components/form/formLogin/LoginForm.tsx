"use client";
// Hooks
import { useLogin } from "@/components/form/formLogin/useLogin";

// Components
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ImSpinner8 } from 'react-icons/im'
import { GoogleButtons } from "@/app/(application)/_components/SocialLogin";
import Spinner from "@/components/ui/Spinner";

export const LoginForm = () => {
  const { errors, handleForm, handleSubmit, register, isSubmitting } = useLogin()

  return (
    <section className="flex flex-col gap-2 divide-x">
      <form onSubmit={handleSubmit(handleForm)} className="flex flex-col items-center gap-4 justify-center">
        <label>Username:</label>
        <Input
          type="text"
          variant={errors.username ? 'error' : 'default'}
          disabled={isSubmitting}
          {...register("username")}
          error={errors.username?.message}
        />
        <label>Password:</label>
        <Input
          type="password"
          variant={errors.password ? 'error' : 'default'}
          disabled={isSubmitting}
          {...register("password")}
          error={errors.password?.message}
        />
        <Button variant={isSubmitting ? 'loading' : 'blue'} type="submit" disabled={isSubmitting}>
          {isSubmitting && <Spinner />}
          Entrar
        </Button>
      </form>
      <GoogleButtons />
    </section>
  );
};
