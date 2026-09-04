'use client'

import './styles.scss'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About me' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' }
  ]

  return (
    <nav className='nav'>
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx('nav__link', {
            'nav__link--active': pathname === link.href
          })}
        >
          {link.label}
        </Link>
      ))}
      <div className='nav__btn'>
        <span className='nav__btn-line'></span>
        <span className='nav__btn-line'></span>
        <span className='nav__btn-line'></span>
      </div>
    </nav>
  )
}
