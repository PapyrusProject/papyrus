"use client";
// Hooks
import { useRegister } from "@/components/form/registerForm/useRegister";

// Components
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Spinner from "@/components/ui/Spinner";
import { Label } from "@/components/ui/label";
import React from "react";

export const RegisterForm = () => {
  const { errors, handleRegister, handleSubmit, register, isSubmitting } =
    useRegister();

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(handleRegister)}
    >
      <Label>Email</Label>
      <Input
        aria-label="email"
        type="email"
        disabled={isSubmitting}
        {...register("email")}
        error={errors.email?.message}
      />
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
      <Label>Confirm password:</Label>
      <Input
        role="confirmPassword"
        aria-label="confirmPassword"
        type="password"
        disabled={isSubmitting}
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Spinner size="md" />}Register
      </Button>
    </form>
  );
};
