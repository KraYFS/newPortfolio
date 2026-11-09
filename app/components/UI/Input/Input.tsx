import './styles.scss'

import clsx from 'clsx'

export default function Input({
  placeholder,
  className
}: {
  placeholder?: string
  className?: string
}) {
  return (
    <input
      type='text'
      className={clsx('input', className)}
      placeholder={placeholder}
    />
  )
}
