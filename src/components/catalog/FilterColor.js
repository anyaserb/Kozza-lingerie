import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./FilterColor.module.css";
import SvgCheckMark from "../svg/SvgCheckMark";

const FilterColor = (props) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [checkboxes, setCheckboxes] = useState({});

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName]
    }));
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.filterHeader}
        onClick={(e) => setIsActiveFilter(!isActiveFilter)}
      >
        <div className={styles.filterHeaderMain}>
          <h6>{props.header}</h6>
          <span className={styles.quantity}>
            {props.color.length}
          </span>
        </div>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={isActiveFilter ? styles.iconActive : ""}
        />
      </div>
      <div className={`${isActiveFilter ? styles.activeContainer : ""}`}>
        {isActiveFilter &&
          props.color.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.checkbox}  ${
                  checkboxes[item] ? styles.activeCheckbox : ""
                }`}
              >
                <div
                  onClick={() => handleCheckboxChange(item)}
                  style={{ backgroundColor: item }}
                  className={styles.colorItem}
                ></div>
                <div
                  className={styles.checkmark}
                  onClick={() => handleCheckboxChange(item)}
                >
                  <SvgCheckMark
                    svgCheckMark={styles.svgCheckMark}
                    svgCheckMarkColor={styles.svgCheckMarkColor}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilterColor;
