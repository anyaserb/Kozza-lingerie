import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./FilterReusable.module.css";

const FilterReusable = (props) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [checkboxes, setCheckboxes] = useState({});

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName]
    }));
  };

  console.log(checkboxes);

  return (
    <div className={styles.container}>
      <div
        className={styles.filterHeader}
        onClick={(e) => setIsActiveFilter(!isActiveFilter)}
      >
        <h6>{props.header}</h6>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={isActiveFilter ? styles.iconActive : ""}
        />
      </div>
      <div className={`${isActiveFilter ? styles.activeContainer : ""}`}>
        {isActiveFilter &&
          props.displayedFilter.map((item, index) => {
            return (
              <div
                key={index}
              >
                <div
                  onClick={() => handleCheckboxChange(item)}
                  className={`${styles.checkbox} ${checkboxes[item] ? styles.activeCheckbox : ""}`}
                >
                  {item}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilterReusable;
