import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dropdown.module.css";
import { useState } from "react";

const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.btn} onClick={(e) => setIsActive(!isActive)}>
        {props.selected}
        <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
      </div>
      {isActive && (
        <div className={styles.content}>
          {props.data.map((option, index) => (
            <div key={index}
              onClick={(e) => {
                props.setSelected(option);
                setIsActive(false);
              }}
              className={styles.item}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
