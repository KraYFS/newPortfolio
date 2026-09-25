import './styles.scss'

import FacebookIcon from '@/public/icons/socials/FacebookIcon'
import LinkedinIcon from '@/public/icons/socials/LinkedinIcon'
import XIcon from '@/public/icons/socials/XIcon'

import SocialLink from '../UI/SocialLink/SocialLink'

export default function SocialLinkBlock() {
  const links = [
    <SocialLink key='facebookIcon' href='#' icon={<FacebookIcon />} />,
    <SocialLink key='xIcon' href='#' icon={<XIcon />} />,
    <SocialLink key='linkedinIcon' href='#' icon={<LinkedinIcon />} />
  ]

  return (
    <div className='social__links'>
      {links.map(item => {
        return item
      })}
    </div>
  )
}
