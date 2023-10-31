import { CgSpinner } from 'react-icons/cg'
import { tv, type VariantProps } from 'tailwind-variants'

interface spinnerProps extends VariantProps<typeof spinnerVar> { }

const spinnerVar = tv({
    base: 'animate-spin text-primary',
    variants: {
        size: {
            sm: 'h-2 w-2',
            md: 'h-4 w-4',
            lg: 'h-6 w-6',
            xl: 'h-10 w-10'
        },
    },
    defaultVariants: {
        size: 'md'
    }
})

export default function Spinner({ size }: spinnerProps) {
    return (
        <CgSpinner className={spinnerVar({ size })} />
    )
}