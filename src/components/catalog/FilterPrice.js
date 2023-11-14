import styles from "./FilterPrice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const FilterPrice = () => {
  const [isActivePrice, setIsActivePrice] = useState(false);

  const data = useLoaderData();
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    let clothesArray = [];

    for (let key in data) {
      clothesArray.push(data[key]);
    }
    setClothes(clothesArray);
  }, [data]);

  const priceArray = clothes.map((item) => item.price);
  const minValue = Math.min(...priceArray);
  const maxValue = Math.max(...priceArray);

  return (
    <>
      <div
        className={styles.filterHeader}
        onClick={(e) => setIsActivePrice(!isActivePrice)}
      >
        <h6>Ціна, грн</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={isActivePrice ? styles.iconActive : ""}
        />
      </div>
      <div className={`${isActivePrice ? styles.activeContainer : ""}`}>
        {isActivePrice && (
          <div className={styles.filterContainer}>
            <input type="number" placeholder={minValue} />
            <div className={styles.line}></div>
            <input type="number" placeholder={maxValue} />
          </div>
        )}
      </div>
    </>
  );
};

export default FilterPrice;
