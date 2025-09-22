import { NextResponse } from 'next/server'

const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    description: 'High-quality noise-cancelling headphones with long battery life.',
    image: '/headphones.jpg',
    price: '₹3,999',
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    title: 'Smartphone Pro',
    description: 'Flagship smartphone with stunning display and camera.',
    image: '/smartphone.jpg',
    price: '₹39,999',
    rating: 4.7,
    inStock: false
  }
]

export async function GET() {
  return NextResponse.json(products)
}
