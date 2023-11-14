import { useState } from "react";
import styles from "./ImageProductCard.module.css";

const ImageProductCard = (props) => {
  const [mainImage, setMainImage] = useState(props.images[0]);

  return (
    <div className={styles.imageContainer}>
      <div className={styles.leftScreen}>
        {props.images.map((image, index) => {
          return (
            <figure key={index}>
              <img
                src={image}
                alt="rehre"
                className={styles.image}
                onClick={() => setMainImage(image)}
              />
            </figure>
          );
        })}
      </div>
      <div className={styles.mainScreen}>
        <img src={mainImage} alt="" />
      </div>
    </div>
  );
};

export default ImageProductCard;
