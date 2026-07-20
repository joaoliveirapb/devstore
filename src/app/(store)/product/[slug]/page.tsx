import type { Metadata } from 'next'
import Image from 'next/image'
import { AddToCartButton } from '@/components/add-to-cart-button'
import { getFeaturedProducts, getProduct } from '@/services/products'
import { formatCurrency } from '@/utils/format-currency'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)

  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const products = await getFeaturedProducts()

  return products.map(product => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  return (
    <div className="relative grid max-h-215 grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="col-span-1 flex flex-col justify-center px-12">
        <h1 className="font-bold text-3xl leading-tight">{product.title}</h1>

        <p className="mt-2 text-zinc-400 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {formatCurrency(product.price)}
          </span>

          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de{' '}
            {formatCurrency(product.price / 12, {
              minimumFractionDigits: undefined,
              maximumFractionDigits: undefined,
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 font-semibold text-sm"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 font-semibold text-sm"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 font-semibold text-sm"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 font-semibold text-sm"
            >
              GG
            </button>
          </div>
        </div>

        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}
