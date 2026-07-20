/** biome-ignore-all lint/performance/noImgElement: <enable img html tag> */
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'
import { env } from '@/env'
import { getProduct } from '@/services/products'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    <div
      style={{
        background: colors.zinc[950],
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img src={productImageURL} alt="" style={{ width: '100%' }} />
    </div>,
    {
      ...size,
    }
  )
}
