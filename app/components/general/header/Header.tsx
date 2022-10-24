import classes from './Header.module.scss'
import { ILink } from '../../../types/ILink'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'
import { useState } from 'react'

const Header = () => {
  const links: ILink[] = [
    { id: 0, title: 'Проекты', path: '/' },
    { id: 1, title: 'О нас', path: '/about' },
    { id: 2, title: 'Отзывы', path: '/reviews' }
  ]

  const [menuActive, setMenuActive] = useState(false)
  const { pathname }: any = useRouter()
  return (
    <header className={classes['header']}>
      <h2 className={classes['header__logo']}>Rambler&#38;Co</h2>
      <nav
        className={classNames(classes['header__menu'], {
          [classes['header__menu-active']]: menuActive
        })}
      >
        {links.map(item => (
          <Link key={item.id} href={item.path}>
            <a
              key={item.id}
              href={item.path}
              className={classNames({
                [classes['header__link-active']]: pathname === item.path,
                [classes['header__link']]: pathname !== item.path
              })}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </nav>
      <div
        className={classNames(classes['burger-menu'], {
          [classes['burger-menu-active']]: menuActive
        })}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
      </div>
    </header>
  )
}

export default Header
