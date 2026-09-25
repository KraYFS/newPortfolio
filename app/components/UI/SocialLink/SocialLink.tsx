import './styles.scss'

import type { ReactNode } from 'react'

type SocialLinkTypes = {
  href: string
  icon: ReactNode
}

export default function SocialLink({ href, icon }: SocialLinkTypes) {
  return (
    <a className='socialLink' href={href}>
      {icon}
    </a>
  )
}
