import { render, screen } from '@testing-library/react'
import ProductCard from '../src/components/ProductCard'

describe('ProductCard', () => {
  it('renders product info and view more button', () => {
    render(<ProductCard title='Test' description='Desc' image='/headphones.jpg' price='₹100' rating={4.2} inStock={true} />)
    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(screen.getByText('Desc')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /view more/i })).toBeInTheDocument()
  })
})
