import { api } from '@/lib/api'
import type { IProduct } from '@/types/product'

export async function getFeaturedProducts(): Promise<IProduct[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products: IProduct[] = await response.json()

  return products
}
