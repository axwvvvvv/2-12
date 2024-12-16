import React, { useEffect, useState } from "react";
import s from "./Clothes.module.scss"; // Ваши стили

const Clothes = ({ onCategorySelect }) => {
  const [products, setProducts] = useState([]); // Состояние для хранения товаров
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

  // Загрузка данных из файла products.json
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json"); // Загружаем JSON из public
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Обработка клика по категории
  const handleCategoryClick = (category) => {
    onCategorySelect(category); // Передача выбранной категории в родительский компонент
  };

  return (
    <div className={s.clothes}>
      {categories.map((category) => (
        <h4 key={category} onClick={() => handleCategoryClick(category)}>
          {category} <img src="/more.svg" alt="" />
        </h4>
      ))}
    </div>
  );
};

export default Clothes;
