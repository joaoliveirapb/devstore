import { Skeleton } from '@/components/skeleton'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <p className="text-sm">Resultados para:</p>
        <Skeleton className="h-4 w-16" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
      </div>
    </div>
  )
}
