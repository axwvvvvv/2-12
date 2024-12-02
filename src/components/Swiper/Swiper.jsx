import React from 'react'
import s from './Swiper.module.scss'

const Swiper = () => {
  return (
    <>
        <section className={s.swiper}>
            <div className="container">
                <div className={s.wrapper}>
                    <h2 className={s.title}>OUR HAPPY CUSTOMERS</h2>
                    

                    <div className={s.comments}>
                        <div className={s.comment}>
                            <img src="/Frame6.svg" alt="" />
                            <div className={s.name}>
                                <b>Sarah M.</b>
                                <img src="/Vector.svg" alt="" />
                            </div>

                            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                        </div>
                        <div className={s.comment}>
                            <img src="/Frame6.svg" alt="" />
                            <div className={s.name}>
                                <b>Alex K.</b>
                                <img src="/Vector.svg" alt="" />
                            </div>

                            <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                        </div>
                        <div className={s.comment}>
                            <img src="/Frame6.svg" alt="" />
                            <div className={s.name}>
                                <b>James L.</b>
                                <img src="/Vector.svg" alt="" />
                            </div>

                            <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


export default Swiper