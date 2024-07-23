import React, { useEffect, useState } from "react";
import styles from "./productPage.module.css";
import { Link, useParams } from "react-router-dom";
import { log } from "console";
import { IProduct } from "../shop/Shop";
import MyButton from "../myButton/MyButton";
import Loader from "../loader/Loader";

const initialData: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>(initialData);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h3>{product.title}</h3>

      <p>{product.description}</p>
      <img src={product.image} width={200} alt="" />
      <div>
        <Link to={"/shop"}>
          <MyButton name="back to shop" />
        </Link>
      </div>
    </div>
  );
}
