"use client";
// Hooks
import { useRegister } from "@/components/form/formRegister/useRegister";

// Components
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

// Icons
import { ImSpinner8 } from "react-icons/im";

export const RegisteForm = () => {
  const { errors, handleRegister, handleSubmit, register, isSubmitting } =
    useRegister();

  return (
    <form
      className="flex flex-col item-center justify-center gap-2"
      onSubmit={handleSubmit(handleRegister)}
    >
      <Input
        type="email"
        variant={errors.email ? 'error' : 'default'}
        disabled={isSubmitting}
        {...register("email")}
        error={errors.email?.message}
      />
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
      <Input
        type="password"
        variant={errors.confirmPassword ? 'error' : 'default'}
        disabled={isSubmitting}
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <Button variant={isSubmitting ? 'loading' : 'blue'} type="submit">
        {isSubmitting && (
          <span className="animate-spin">
            <ImSpinner8 />
          </span>
        )}
        Register
      </Button>
    </form>
  );
};
