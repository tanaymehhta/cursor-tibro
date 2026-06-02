import * as React from 'react'
import { cn } from '../../lib/utils'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn('h-12 w-full rounded-full border border-stone-300 bg-white px-4 text-sm outline-none transition focus:border-stone-900', className)} {...props} />
))
Input.displayName = 'Input'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn('min-h-32 w-full rounded-3xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-stone-900', className)} {...props} />
))
Textarea.displayName = 'Textarea'
