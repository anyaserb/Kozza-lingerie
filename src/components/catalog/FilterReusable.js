import styles from "./FilterReusable.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import SvgCheckMark from "../svg/SvgCheckMark";

const FilterReusable = (props) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [checkboxes, setCheckboxes] = useState({});

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => {
      const newCheckboxes = {
        ...prevCheckboxes,
        [checkboxName]: !prevCheckboxes[checkboxName]
      };
      props.onFilterChange(newCheckboxes);
      return newCheckboxes;
    });
  };

  
  return (
    <>
      <div
        className={styles.filterHeader}
        onClick={(e) => setIsActiveFilter(!isActiveFilter)}
      >
        <div className={styles.filterHeaderMain}>
          <h6>{props.header}</h6>
          <span className={styles.quantity}>
            {props.displayedClothes.length}
          </span>
        </div>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={isActiveFilter ? styles.iconActive : ""}
        />
      </div>
      <div
        className={`${styles.checkboxContainer} ${
          isActiveFilter ? styles.activeContainer : ""
        }`}
      >
        {isActiveFilter &&
          props.displayedClothes.map((item, index) => {
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
                  {props.filter.filter((clo) => clo === item).length}
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

export default FilterReusable;
