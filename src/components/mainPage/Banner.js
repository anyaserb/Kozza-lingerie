import styles from "./Banner.module.css";
import SvgArrow from "../svg/SvgArrow";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className={styles.imageContainer}>
      <div className={styles.gridContainer}>
        <p className={styles.bannerText}>
          Знижка 15% на мереживну <br /> колекцію до кінця осені
        </p>
        <div className={styles.buttonContainer}>
          <Link to="product" className={styles.catalogButton}>
            <span className={styles.buttonText}>Перейти до каталогу</span>
            <SvgArrow svgArrow={styles.svgArrow} svgCircle={styles.svgCircle} svgPath={styles.svgPath}/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
