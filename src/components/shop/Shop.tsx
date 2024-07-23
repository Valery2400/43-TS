import { useEffect, useState } from "react";
import { number, string } from "yup";
import styles from "./shop.module.css";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";

// 1. Создайте новый компонент Shop.tsx.
// 2. В нем сделайте fetch запрос на `https://fakestoreapi.com/products` с данными о продуктах
// 3. Отобразите данные в карточках с grid стилизацией.
// 4. Вынесите карточку с данными о продукте в отдельный компонент ProductCard.tsx
// и данные прокидывайте через props.
// https://fakestoreapi.com/products
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export default function Shop() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <h3>Shop</h3>

      <div className={styles.productGrid}>
        {products.map((el) => (
          <ProductCard
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            image={el.image}
          />
        ))}
      </div>
    </>
  );
}
