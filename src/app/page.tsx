import ProductCard from '../components/ProductCard'
import ThemeToggle from '../components/ThemeToggle'

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default async function Page() {
  const products = await getProducts()

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <div key={p.id} className="flex justify-center">
            <ProductCard
              title={p.title}
              description={p.description}
              image={p.image}
              price={p.price}
              rating={p.rating}
              inStock={p.inStock}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
