import React from 'react'
import s from './Card.module.scss'

const Card = ({image, name='Soon...', rate='0', price='Нет в наличии'}) => {
  return (
    <>
        <div className={s.card}>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <div className={s.marks}>
              <img src="/Frame6.svg" alt="" />
              <p>4.5/5</p>
            </div>
            <img src="" alt="" />
            <b>{price} сум</b>
        </div>
    </>
  )
}

export default Card