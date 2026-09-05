import './styles.scss'

import clsx from 'clsx'
import Link from 'next/link'

import Arrow from '@/public/arrow'

export default function CtaButton({
  href,
  className
}: {
  href: string
  className?: string
}) {
  return (
    <Link className={clsx('cta-button', [className])} href={href}>
      <Arrow width={20} height={20} />
    </Link>
  )
}
