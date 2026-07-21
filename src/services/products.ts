import { api } from '@/lib/api'
import type { IProduct } from '@/types/product'

export async function getProduct(slug: string): Promise<IProduct> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const product = await response.json()

  return product
}

export async function getFeaturedProducts(): Promise<IProduct[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products: IProduct[] = await response.json()

  return products
}

export async function getSearchProducts(query: string): Promise<IProduct[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products: IProduct[] = await response.json()

  return products
}
