import './styles.scss'

import clsx from 'clsx'

export default function Button({
  text,
  className
}: {
  text: string
  className?: string
}) {
  return <button className={clsx('button', className)}>{text}</button>
}
