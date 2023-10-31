"use client";
// Hooks
import { useRegister } from "@/components/form/formRegister/useRegister";

// Components
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Spinner from "@/components/ui/Spinner";
import React from "react";

// Icon
import { ImSpinner8 } from "react-icons/im";

export const RegisteForm = () => {
  const { errors, handleRegister, handleSubmit, register, isSubmitting } = useRegister();

  return (
    <form
      className="flex flex-col item-center justify-center gap-2"
      onSubmit={handleSubmit(handleRegister)}
    >
      <label>Email:</label>
      <Input
        type="email"
        variant={errors.email ? 'error' : 'default'}
        disabled={isSubmitting}
        {...register("email")}
        error={errors.email?.message}
      />
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
      <label>Confirm password:</label>
      <Input
        type="password"
        variant={errors.confirmPassword ? 'error' : 'default'}
        disabled={isSubmitting}
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <Button variant={isSubmitting ? 'loading' : 'blue'} type="submit">
        {isSubmitting && (
          <Spinner />
        )}
        Register
      </Button>
    </form>
  );
};
