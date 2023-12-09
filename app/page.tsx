import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <div>
      <h1>Hello World I am batman</h1>
      <Link href='/users'>User Page</Link>
      <ProductCard />
    </div>
  )
}
