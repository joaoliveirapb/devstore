import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="font-extrabold text-2xl text-white">
          devstore
        </Link>

        <Suspense fallback={<p>Carregando...</p>}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Conta</span>
          <Image
            src="https://github.com/joaoliveirapb.png"
            alt="Avatar"
            width={24}
            height={24}
            className="size-6 rounded-full"
          />
        </Link>
      </div>
    </header>
  )
}
