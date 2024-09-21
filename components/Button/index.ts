import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'rounded-full transition-all duration-300 hover:scale-105 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'border-ancient-stone hover:bg-sassy hover:text-black hover:border-sassy border-[2px] rounded-xl',
        secondary:
          'border-sassy text-sassy hover:bg-white hover:text-black hover:border-ancient-stone border-[2px] rounded-xl',
        tertiary: 'bg-neutral-900 hover:bg-sassy hover:text-black text-white',
      },
      size: {
        sm: 'py-2 px-3.5 text-sm',
        md: 'py-3 px-6',
        lg: 'py-4 px-14 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
