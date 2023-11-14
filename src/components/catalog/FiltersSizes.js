import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./FiltersSizes.module.css";

const FiltersSizes = (props) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false);
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
        className={styles.filterHeader}
        onClick={(e) => setIsActiveFilter(!isActiveFilter)}
      >
        <div className={styles.filterHeaderMain}>
          <h6>{props.header}</h6>
          <span className={styles.quantity}>
            {props.measure.length}
          </span>
        </div>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={isActiveFilter ? styles.iconActive : ""}
        />
      </div>
      <div className={`${isActiveFilter ? styles.activeContainer : ""}`}>
        {isActiveFilter &&
          props.measure.map((item, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => handleCheckboxChange(item)}
                  className={`${styles.checkbox} ${
                    checkboxes[item] ? styles.activeCheckbox : ""
                  }`}
                >
                  {item}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FiltersSizes;
