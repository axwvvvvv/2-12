import React from "react";
import s from "./CategoryWrap.module.scss";
import PriceRangeSlider from "../PriceSwiper/PriceRangeSlider";
import { useState } from "react";
import Card from "../Card/Card";
import Products from "/public/products.json";
import { Link } from "react-router-dom";
import Clothes from "../Clothes/Clothes";

const CategoryWrap = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1500]);

  // Фильтрация товаров по категории и диапазону цен
  const filteredProducts = Products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.special === selectedCategory
      : true;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
  });

  const colors = [
    { id: 1, color: "#00C12B" },
    { id: 2, color: "#c10000" },
    { id: 3, color: "#F5DD06" },
    { id: 4, color: "#F57906" },
    { id: 5, color: "#06CAF5" },
    { id: 6, color: "#063AF5" },
    { id: 7, color: "#7D06F5" },
    { id: 8, color: "#F506A4" },
    { id: 9, color: "#FFFFFF" },
    { id: 10, color: "#000000" },
  ];

  return (
    <>
      <section className={s.categorywrap}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.filter}>
              <div className={s.header}>
                <h3>Filters</h3>
                <img src="" alt="" />
              </div>

              <Clothes onCategorySelect={setSelectedCategory} />

              <PriceRangeSlider onChange={setPriceRange} />

              <div className={s.colors}>
                <h3>
                  Colors <img src="/more.svg" alt="" />
                </h3>
                <div className={s.colorsGrid}>
                  {colors.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedColor(item.id)}
                      className={`${s.colorItem} ${
                        selectedColor === item.id ? s.selected : ""
                      }`}
                      style={{ backgroundColor: item.color }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className={s.size}>
                <h3>
                  Size <img src="/more.svg" alt="" />
                </h3>
                <div className={s.btns}>
                  {[
                    "XX-Small",
                    "X-Small",
                    "Small",
                    "X-Large",
                    "XX-Large",
                    "Large",
                    "3X-Large",
                    "4X-Large",
                  ].map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(index)}
                      style={{
                        backgroundColor: selectedSize === index ? "#000" : "",
                        color: selectedSize === index ? "#fff" : "",
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className={s.style}>
                <div className={s.style__title}>
                  <h3>
                    Dress style <img src="/more.svg" alt="" />
                  </h3>
                  <p>
                    Casual <img src="/more.svg" alt="" />
                  </p>
                  <p>
                    Formal <img src="/more.svg" alt="" />
                  </p>
                  <p>
                    Party <img src="/more.svg" alt="" />
                  </p>
                  <p>
                    Gym <img src="/more.svg" alt="" />
                  </p>

                  <button>Apply Filter</button>
                </div>
              </div>
            </div>

            <div className={s.products}>
              <div className={s.title}>
                <h2>Filtered Products</h2>
                <b>Sort by: Most Popular</b>
              </div>
              <section className={s.category}>
                <div className={s.wrapper__products}>
                  {filteredProducts.slice(0, 9).map((card) => (
                    <Link
                      key={card.id}
                      to={`/product/${card.id}`}
                      className={s.link}
                    >
                      <Card
                        image={card.image}
                        name={card.name}
                        price={card.price}
                      />
                    </Link>
                  ))}
                </div>
              </section>

              <div className={s.swiper}>
                <button className={s.right}>←</button>
                <h3>1</h3>
                <button className={s.left}>→</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryWrap;
