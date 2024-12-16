import React, { useState } from 'react'
import s from './ProductWrap.module.scss'

const ProductWrap = ({ product }) => {
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 1 ? count - 1 : 1);

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const handleColorClick = (index) => {
    setActiveColor(index);
  };

  return (
    <>
      <section className={s.productwrap}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.images}>
              <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>

              <img src={product.image} alt="" />
            </div>

            <div className={s.box}>
              <div>
                <h2>{product.name}</h2>
                <h3>⭐⭐⭐⭐ 4/5</h3>
                <div className={s.price}>
                  <b>{product.price * count} сум</b>
                  <s>{Math.floor(product.price * 1.10 * count)} сум</s>
                </div>
                <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
              </div>

              <div>
                <p>Select Colors</p>
                <div className={s.colors}>
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      onClick={() => handleColorClick(index)}
                      style={{
                        backgroundImage: activeColor === index ? 'url(/check.svg)' : 'none',
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div>
                <p>Choose Size</p>

                <div className={s.btns}>
                  {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      style={{
                        backgroundColor: activeSize === size ? 'black' : '#F0F0F0',
                        color: activeSize === size ? 'white' : 'black',
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className={s.count}>
                  <button onClick={decrementCount}>-</button>
                  <p>{count}</p>
                  <button onClick={incrementCount}>+</button>
                </div>

                <button className={s.add}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductWrap