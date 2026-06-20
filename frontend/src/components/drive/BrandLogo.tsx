import { cn } from '@/lib/utils'

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <img src="/logo.png" alt="NexoDrive logo" className="h-full w-full object-contain" />
    </div>
  )
}
