'use client'

import { ShoppingBagIcon } from 'lucide-react'
import { useCartContext } from '@/contexts/cart-context'

export function CartWidget() {
  const { items } = useCartContext()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBagIcon className="size-4" />
      <span className="text-sm">Carrinho ({items.length})</span>
    </div>
  )
}
