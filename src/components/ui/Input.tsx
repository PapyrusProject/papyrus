import React from "react"
import { InputHTMLAttributes } from "react"
import { VariantProps, tv } from "tailwind-variants"

type InputProps = InputHTMLAttributes<HTMLInputElement> & 
VariantProps<typeof inputVariants> & {
    error?: string,
}

const inputVariants = tv({
    base: 'p-2 border ourline-none',
    variants: {
        variant: {
            default: 'border-primary',
            success: 'border-success',
            error: 'border-error',
        }
    },
    defaultVariants:{
        variant: 'default'
    }
})

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    function Input({variant, className, error = '', ...props}, ref){
        return(
            <div>
                <input 
                className={inputVariants({variant, className})}
                {...props}
                ref={ref}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        )
    }
)