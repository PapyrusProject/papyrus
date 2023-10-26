import { ButtonHTMLAttributes, ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center border rounded-md gap-2 w-full",
  variants: {
    variant: {
      blue: "bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary",
      white: "bg-transparent hover:bg-primary hover:text-white border-primary",
      loading: 'bg-stone-400',
      lightBlue: "bg-light_blue text-dark_blue hover:bg-primary hover:text-white font-semibold"
    },
    size: {
      sm: "py-1 px-2",
      md: "py-2 px-4",
      xl: "py-4 px-6",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "blue",
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode;
  };

export const Button = ({
  className,
  variant,
  size,
  children = "",
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, className, size })} {...props}>
      {children}
    </button>
  );
};
