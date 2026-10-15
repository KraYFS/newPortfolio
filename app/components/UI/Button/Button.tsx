import './styles.scss'

import clsx from 'clsx'
import Link from 'next/link'
import type { MouseEventHandler } from 'react'

export default function Button({
  text,
  className,
  href,
  onClick
}: {
  text: string
  className?: string
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  return href ? (
    <Link className={clsx('button', className)} href={href}>
      {text} <span>&rarr;</span>
    </Link>
  ) : (
    <button onClick={onClick} className={clsx('button', className)}>
      {text}
    </button>
  )
}
