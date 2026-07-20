import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className="relative grid max-h-215 grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="col-span-1 flex flex-col justify-center px-12">
        <h1 className="font-bold text-3xl leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 text-zinc-400 leading-relaxed">
          Moletom fabricado com 88% de algodão e 12% de poliéster.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            R$ 129
          </span>

          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$ 10,75
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

        <button
          type="button"
          className="mt-8 flex h-12 cursor-pointer items-center justify-center rounded-full bg-emerald-600 font-semibold text-emerald-50 transition-colors hover:bg-emerald-500"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
