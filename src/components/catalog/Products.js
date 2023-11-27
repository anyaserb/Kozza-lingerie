import styles from "./Products.module.css";
import SvgCardLike from "../svg/SvgCardLike";
import SvgCardBasket from "../svg/SvgCardBasket";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = (props) => {
  // const [clothesArray, setClothesArray] = useState([]);

  // const clothes = useLoaderData();

  // useEffect(() => {
  //   for (let key in clothes) {
  //     setClothesArray((prevClothesArray) => [
  //       ...prevClothesArray,
  //       clothes[key]
  //     ]);
  //   }
  // }, [clothes]);

  return (
    <>
      {Object.keys(props.clothes).map((productId, index) => {
        const item = props.clothes[productId];

        return (
          <Link key={index} className={styles.cardCollections}>
            <div>
              <img src={item.images[0]} alt="" />
              <div className={styles.svgLike}>
                <SvgCardLike />
              </div>
              <div className={styles.blackBox}>
                <h3>{item.name}</h3>
                <ul className={styles.colors}>
                  {item.colors.map((color, index) => {
                    return (
                      <li key={index} style={{ backgroundColor: color }}></li>
                    );
                  })}
                </ul>
                <div className={styles.price}>{item.price}</div>
                <div className={styles.svgCardBasket}>
                  <SvgCardBasket />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Products;
