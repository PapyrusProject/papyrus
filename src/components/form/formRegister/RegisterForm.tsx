"use client";
// Hooks
import { useRegister } from "@/components/form/formRegister/useRegister";

// Components
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const RegisteForm = () => {
  const { errors, handleRegister, handleSubmit, register } = useRegister();

  return (
    <form
      className="flex flex-col item-center justify-center gap-2"
      onSubmit={handleSubmit(handleRegister)}
    >
      <Input
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
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
      <Input
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <Button variant="blue" type="submit">
        Register
      </Button>
    </form>
  );
};
