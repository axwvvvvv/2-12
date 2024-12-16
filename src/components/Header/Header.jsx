import React, { useEffect } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    // Инициализация AOS при монтировании компонента
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Длительность анимации
            once: true,      // Анимации будут срабатывать только один раз
            easing: 'ease-in-out', // Тип анимации
        });
    }, []);

    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    {/* Логотип с анимацией появления сверху */}
                    <Link to={'/'} className={s.logo} data-aos="fade-down" data-aos-delay="100">
                        SHOP.CO
                    </Link>

                    {/* Меню с элементами, которые появляются с задержкой */}
                    <div className={s.menu}>
                        <Link to="/shop" data-aos="fade-down" data-aos-delay="200">Shop</Link>
                        <Link to="/on-sale" data-aos="fade-down" data-aos-delay="300">On Sale</Link>
                        <Link to="/new-arrivals" data-aos="fade-down" data-aos-delay="400">New Arrivals</Link>
                        <Link to="/brands" data-aos="fade-down" data-aos-delay="500">Brands</Link>
                    </div>

                    {/* Поиск с анимацией появления слева */}
                    <input 
                        type="text" 
                        className={s.search}  
                        placeholder="Search for products..." 
                        data-aos="fade-down"
                        data-aos-delay="600"
                    />

                    {/* Иконки с анимацией появления справа */}
                    <div className={s.box} data-aos="fade-down" data-aos-delay="700">
                        <img src="/icon-1.svg" alt="Icon 1" />
                        <img src="/icon-2.svg" alt="Icon 2" />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
