import styles from "./CatalogHeader.module.css";
import { useLoaderData } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import SvgCardLike from "../svg/SvgCardLike";
import SvgCardBasket from "../svg/SvgCardBasket";
import { Link } from "react-router-dom";
import Footer from "../mainPage/Footer";

const sorting = [
  "За рейтингом",
  "Від дешевих до дорогих",
  "Від дорогих до дешевих"
];

const CatalogHeader = () => {
  const [selected, setSelected] = useState(sorting[0]);
  const [clothesArray, setClothesArray] = useState([]);

  const clothes = useLoaderData();

  useEffect(() => {
    for (let key in clothes) {
      setClothesArray((prevClothesArray) => [
        ...prevClothesArray,
        clothes[key]
      ]);
    }
  }, [clothes]);

  let newClothes = [];
  const handleChange = (checkboxes) => {
    for (const key in checkboxes) {
      for (const item in clothes) {
        if (
          clothes[item].brand === key &&
          checkboxes[key] &&
          !newClothes.includes(clothes[item])
        ) {
          newClothes.push(clothes[item]);
        } else if (
          clothes[item].brand === key &&
          !checkboxes[key] &&
          newClothes.includes(clothes[item])
        ) {
          const indexToRemove = newClothes.indexOf(clothes[item]);
          newClothes.splice(indexToRemove, 1);
        }
      }
    }
    console.log(clothesArray)

    setClothesArray(newClothes);
  };

  return (
    <>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogHeader}>
          <div className={styles.catalogName}>
            <h1>Каталог</h1>
            <div>({Object.keys(clothes).length} товарів)</div>
          </div>
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            data={sorting}
          />
        </div>
        <div className={styles.line}></div>
        <div className={styles.contentFilter}>
          <div className={styles.filterBox}>
            <Filters onFilterChange={handleChange} />
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.collection}>
            {clothesArray.map((item, index) => {
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
                            <li
                              key={index}
                              style={{ backgroundColor: color }}
                            ></li>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CatalogHeader;
