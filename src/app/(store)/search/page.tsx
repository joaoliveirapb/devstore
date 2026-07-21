import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getSearchProducts } from '@/services/products'
import { formatCurrency } from '@/utils/format-currency'

interface SearchPageProps {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams

  if (!query) {
    redirect('/')
  }

  const products = await getSearchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              src={product.image}
              alt=""
              width={480}
              height={480}
              quality={100}
              className="transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute right-10 bottom-10 flex h-12 max-w-70 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate text-sm">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {formatCurrency(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
