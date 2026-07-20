import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProducts } from '@/services/products'
import { formatCurrency } from '@/utils/format-currency'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-215 grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={highlightedProduct.image}
          alt=""
          width={920}
          height={920}
          quality={100}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute right-28 bottom-20 flex h-12 max-w-70 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {formatCurrency(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map(product => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            src={product.image}
            alt=""
            width={920}
            height={920}
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
  )
}
