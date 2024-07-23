import React from "react";
import styles from "./productCard.module.css";
import MyButton from "../myButton/MyButton";
import { Link } from "react-router-dom";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
}: IProductCardProps) {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.namecard}>
        <h4>{title} </h4>
      </div>
      <div className={styles.price}> {price} ₮ </div>
      <img src={image} alt={title} />
      <div>
        <Link to={String(id)}>
          <MyButton name="about product" />
        </Link>
      </div>
    </div>
  );
}
