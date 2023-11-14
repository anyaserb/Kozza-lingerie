import SvgBurger from "../svg/SvgBurger";
import SvgBasket from "../svg/SvgBasket";
import SvgSearch from "../svg/SvgSearch";
import SvgCabinet from "../svg/SvgCabinet";
import SvgLogo from "../svg/SvgLogo";
import SvgLike from "../svg/SvgLike";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.mainMenu}>
          
          <div className={styles.burger}>
            <Link href="">
              <SvgBurger />
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="">
              <SvgLogo className={styles.svgLogo}/>
            </Link>
          </div>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Пошук по каталогу" />
          <Link href="">
            <SvgSearch />
          </Link>
        </div>
        <ul className={styles.cabinet}>
          <li>
            <Link href="">
              <SvgBasket />
            </Link>
          </li>
          <li>
            <Link href="">
              <SvgLike svgLike={styles.svgLike}/>
            </Link>
          </li>
          <li>
            <Link href="">
              <SvgCabinet />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.line}></div>
    </>
  );
};

export default Navbar;
