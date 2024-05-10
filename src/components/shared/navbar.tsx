import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

import { NAVBAR_LINK } from '@/lib/config/marketing'
import { routes } from '@/lib/config/routes'


export function Navbar() {
  return (
    <nav className='flex items-center justify-between py-8 px-28 border-b-2 border-gray-400'>
      <div className='flex items-center gap-12'>
        <h1 className='flex items-center gap-2 text-2xl font-bold '>
          <ShoppingBag />
          Store
        </h1>
        {NAVBAR_LINK.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className='text-zinc-600 font-medium transition ease-out hover:text-black'
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href={routes.cartRoute()}
        className='text-xl text-zinc-600 font-bold transition ease-out hover:text-black hover:underline'
      >
        Cart
      </Link>
    </nav>
  )
}
