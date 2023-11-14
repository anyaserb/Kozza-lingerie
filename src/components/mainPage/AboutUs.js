import SvgLogo from "../svg/SvgLogo";
import { Link } from "react-router-dom";
import SvgArrow from "../svg/SvgArrow";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutText}>
      <div className={styles.aboutContainer}>
        <SvgLogo className={styles.logo}/>
        <div className={styles.test}>— бренд про жінок та для жінок. </div>
        <div>Дізнатися більше </div>
        <Link href="" className={styles.buttonAboutUs}>
          <span className={styles.buttonAboutUsText}>про нас</span>
          <SvgArrow
            svgArrow={styles.svgArrow}
            svgCircle={styles.svgCircle}
            svgPath={styles.svgPath}
          />
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
