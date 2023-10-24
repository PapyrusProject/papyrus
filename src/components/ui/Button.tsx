import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center border rounded-md gap-2",
  variants: {
    variant: {
      primary: "bg-primary text-content hover:bg-content hover:text-primary",
      secondary: "bg-content text-primary hover:bg-primary hover:text-content",
    },
    size: {
      sm: "py-1 px-2",
      md: "py-2 px-4",
      xl: "py-4 px-6",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    children?: ReactNode
    icon?: ReactNode
}

export const Button = (
    {className, variant, size, icon, children = '', ...props}: ButtonProps
    ) => {
    return <button
    className={buttonVariants({variant, className, size})}
    {...props}
    >
        {icon}
        {children}
    </button>
}