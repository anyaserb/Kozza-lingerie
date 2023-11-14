import styles from "./FiltersBrand.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import SvgCheckMark from "../svg/SvgCheckMark";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const FiltersBrand = () => {
  const data = useLoaderData();
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    let clothesArray = [];

    for (let key in data) {
      clothesArray.push(data[key]);
    }
    setClothes(clothesArray);
  }, [data]);

  useEffect(() => {
    let brandArray = [];

    clothes.map((item) => {
      if (!brandArray.includes(item.brand)) {
        brandArray.push(item.brand);
      }
    });
    setDisplayedBrand(brandArray);
  }, [clothes]);

  const [isActiveBrand, setIsActiveBrand] = useState(false);
  const [displayedBrand, setDisplayedBrand] = useState([]);

  const [checkboxes, setCheckboxes] = useState({});

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName]
    }));
  };

  return (
    <>
      <div
        className={styles.brandHeader}
        onClick={(e) => setIsActiveBrand(!isActiveBrand)}
      >
        <div className={styles.brandHeaderMain}>
          <h6>Бренд</h6>
          <span className={styles.quantity}>{displayedBrand.length}</span>
        </div>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={isActiveBrand ? styles.iconActive : ""}
        />
      </div>
      <div
        className={`${styles.checkboxContainer} ${
          isActiveBrand ? styles.activeContainer : ""
        }`}
      >
        {isActiveBrand &&
          displayedBrand.map((item, index) => {
            return (
              <div
                className={`${styles.checkbox} ${
                  checkboxes[item] ? styles.active : ""
                }`}
                key={index}
              >
                <input
                  id={item}
                  type="checkbox"
                  checked={checkboxes.item}
                  onChange={() => handleCheckboxChange(item)}
                />
                <label htmlFor={item}>{item}</label>
                <span className={styles.quantity}>
                  {clothes.filter((clo) => clo.brand === item).length}
                </span>
                <div className={styles.checkmark}>
                  <SvgCheckMark
                    svgCheckMark={styles.svgCheckMark}
                    svgCheckMarkColor={styles.svgCheckMarkColor}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FiltersBrand;
