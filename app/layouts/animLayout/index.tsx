'use client'

import './styles.scss'

import clsx from 'clsx'
import { useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter'

import Button from '@/app/components/UI/Button/Button'
import Input from '@/app/components/UI/Input/Input'

export default function AnimLayout({ children }: LayoutProps<'/'>) {
  const [isActive, setIsActive] = useState(false)

  const words = [
    'Oh, who is here?',
    'I haven`t seen you here before',
    'What`s your name?'
  ]

  const [text] = useTypewriter({
    words,
    typeSpeed: 75,
    deleteSpeed: 35,
    loop: 1,
    onLoopDone: () => {
      setIsActive(true)
    }
  })

  return (
    <div className='anim-layout'>
      <div className='anim-layout__wrapper'>
        <div className='anim-layout__content'>
          <span
            className={clsx('anim-layout__text', {
              'anim-layout__text--active': isActive
            })}
          >
            {text}
          </span>
          <Input
            placeholder='Your name'
            className={clsx('anim-layout__input', {
              'anim-layout__input--active': isActive
            })}
          />
          {/* <Button className='anim-layout__button' text='Welcome' /> */}
        </div>
      </div>
      {children}
    </div>
  )
}
