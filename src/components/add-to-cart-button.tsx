'use client'

import { useCartContext } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCartContext()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 cursor-pointer items-center justify-center rounded-full bg-emerald-600 font-semibold text-emerald-50 transition-colors hover:bg-emerald-500"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
