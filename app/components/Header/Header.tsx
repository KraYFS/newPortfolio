import './styles.scss'

import Button from '../UI/Button/Button'
import NavBar from '../UI/NavBar/NavBar'

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <h1 className='header__logo'>Logo</h1>
          <NavBar />
          <Button className='header__button' text='Contact Me' />
        </div>
      </div>
    </header>
  )
}
