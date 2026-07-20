'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface ICartContext {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as ICartContext)

export function CartProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems(prev => {
      const productInCart = prev.some(item => item.productId === productId)

      if (productInCart) {
        return prev.map(item => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          }

          return item
        })
      }

      return [...prev, { productId, quantity: 1 }]
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }

  return context
}
