import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    <Link to={'/'} className={s.logo}>SHOP.CO</Link>

                    <div className={s.menu}>
                        <Link>Shop</Link>
                        <Link>On Sale</Link>
                        <Link>New Arrivals</Link>
                        <Link>Brands</Link>
                    </div>

                    <input type="text" className={s.search}  placeholder='Search for products...'/>

                    <div className={s.box}>
                        <img src="/icon-1.svg" alt="" />
                        <img src="/icon-2.svg" alt="" />
                    </div>

                    
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header