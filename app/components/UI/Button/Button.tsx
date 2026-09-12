import './styles.scss'

import clsx from 'clsx'
import Link from 'next/link'

export default function Button({
  text,
  className,
  href
}: {
  text?: string
  className?: string
  href?: string
}) {
  return href ? (
    <Link className={clsx('button', className)} href={href}>
      {text} &rarr;
    </Link>
  ) : (
    <button className={clsx('button', className)}>{text}</button>
  )
}
