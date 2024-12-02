import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <>
        <section className={s.hero}>
          <div className={s.container}>
            <div className={s.wrap__hero}>
              <div className={s.title}>
                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button>Shop Now</button>

                <div className={s.box}>
                  <div className={s.brands}>
                    <h3>200+</h3>
                    <p>International Brands</p>
                  </div>

                  <div className={s.products}>
                    <h3>2,000+</h3>
                    <p>High-Quality Products</p>
                  </div>

                  <div className={s.customers}>
                    <h3>30,000+</h3>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
              <img className={s.hero__img} src="hero-img.png" alt="" />
            </div>
            

          </div>
        </section>
    </>
  )
}

export default Hero