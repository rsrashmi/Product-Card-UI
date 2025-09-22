'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  image: string
  price?: string
  rating?: number
  inStock?: boolean
}

export default function ProductCard({ title, description, image, price, rating, inStock = true }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={
        'w-full max-w-sm bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200'
      }
      role="region"
      aria-label={`Product card for ${title}`}
    >
      <figure className="w-full h-48 relative">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </figure>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-center text-lg font-semibold">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 text-center">{description}</p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            {price && <span className="text-sm font-bold">{price}</span>}
            {typeof rating === 'number' && (
              <span className="text-xs text-slate-500 dark:text-slate-400">★ {rating.toFixed(1)}</span>
            )}
          </div>

          {inStock ? (
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">In stock</span>
          ) : (
            <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded">Out of stock</span>
          )}
        </div>

        <button
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`View more about ${title}`}
        >
          View More
        </button>
      </div>
    </motion.article>
  )
}
