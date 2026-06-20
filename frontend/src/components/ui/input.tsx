import * as React from 'react'
import { cn } from '@/lib/utils'

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn('h-11 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100', className)}
      {...props}
    />
  )
}
