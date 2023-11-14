import { useState } from "react";
import styles from "./Colors.module.css";
import SvgCheckMark from "../svg/SvgCheckMark";

const Colors = (props) => {
  const [isActive, setIsActive] = useState(props.colors[0]);

  return (
    <ul className={styles.colors}>
      {props.colors.map((color, index) => {
        return (
          <li
            key={index}
            className={`${styles.color} ${
              isActive === color ? styles.active : ""
            }`}
            onClick={() => {
              setIsActive(color);
            }}
            style={{
              backgroundColor: color
            }}
          >
            <div className={styles.checkmark}>
              <SvgCheckMark
                svgCheckMark={styles.svgCheckMark}
                svgCheckMarkColor={styles.svgCheckMarkColor}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Colors;
