import { Link } from "react-router-dom";
import styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  return (
    <ul className={styles.navbarMenu}>
      <li>
        <Link href="">Комплекти</Link>
      </li>
      <li>
        <Link href="">Бюстгальтери</Link>
      </li>
      <li>
        <Link href="">Трусики</Link>
      </li>
      <li>
        <Link href="">Аксесуари</Link>
      </li>
    </ul>
  );
};

export default NavbarMenu;
