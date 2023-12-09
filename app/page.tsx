import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello World I am batman</h1>
      <Link href='/users'>User Page</Link>
    </div>
  )
}
