import styles from "./CatalogHeader.module.css";
import { useLoaderData } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import Footer from "../mainPage/Footer";
import Products from "./Products";

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
    setClothesArray(clothes);
  }, [clothes]);

  let clothesQuantity = 0;
  for (let item in clothes) {
    ++clothesQuantity;
  }

  let newClothes = [];
  const filterSizes = (checkboxes) => {
    for (const key in checkboxes) {
      for (const item in clothes) {
        for (const size of clothes[item].sizes) {
          console.log(newClothes);
          console.log(clothes[item]);
          console.log(key);
          if (size.includes(key) && !newClothes.includes(clothes[item])) {
            newClothes.push(clothes[item]);
          }
        }
      }

      console.log(checkboxes)
      setClothesArray(newClothes);
    }
  };
  // const indexToRemove = newClothes.indexOf(clothes[item]);
  // newClothes.splice(indexToRemove, 1);
  // if (size.includes(key) && newClothes.includes(clothes[item])
  return (
    <>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogHeader}>
          <div className={styles.catalogName}>
            <h1>Каталог</h1>
            <div>({clothesQuantity} товарів)</div>
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
            <Filters onFilter={filterSizes} />
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.collection}>
            <Products clothes={clothesArray} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CatalogHeader;
