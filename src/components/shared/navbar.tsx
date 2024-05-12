"use client"

import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

import { routes } from '@/lib/config/routes'
import { NAVBAR_LINK } from '@/lib/config/marketing'
import { useAppSelector } from '@/lib/hooks/store.hooks'


export function Navbar() {
  const cartItems = useAppSelector((state) => state.cart);

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
        className='flex items-center gap-2 text-xl text-zinc-600 font-bold transition ease-out hover:text-black hover:underline'
      >
        Cart 
        <span>{cartItems.length > 0 && `(${cartItems.length})`}</span>
      </Link>
    </nav>
  )
}
