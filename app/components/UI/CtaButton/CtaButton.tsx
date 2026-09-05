import './styles.scss'

import Link from 'next/link'

import Arrow from '@/public/arrow'

export default function CtaButton({ href }: { href: string }) {
  return (
    <Link className='cta-button' href={href}>
      <Arrow width={20} height={20} />
    </Link>
  )
}
