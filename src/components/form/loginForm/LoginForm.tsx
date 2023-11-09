"use client";
// Hooks
import { useLogin } from "@/components/form/loginForm/useLogin";

// Components
import Spinner from "@/components/ui/Spinner";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/label";

export const LoginForm = () => {
  const { errors, handleForm, handleSubmit, register, isSubmitting } =
    useLogin();

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-3">
        <Label>Username:</Label>
        <Input
          aria-label="username"
          type="text"
          disabled={isSubmitting}
          {...register("username")}
          error={errors.username?.message}
        />
        <Label>Password:</Label>
        <Input
          role="password"
          aria-label="password"
          type="password"
          disabled={isSubmitting}
          {...register("password")}
          error={errors.password?.message}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Spinner size="md" />}
          Entrar
        </Button>
      </form>
    </>
  );
};
