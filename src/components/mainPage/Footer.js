import SvgLogo from "../svg/SvgLogo";
import SvgTelegram from "../svg/SvgTelegram";
import SvgInstagram from "../svg/SvgInstagram";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.line}></div>
      <footer className={styles.footer}>
        <Link href='/'>
          <SvgLogo className={styles.svgLogo} />
        </Link>
        <div className={styles.help}>
          <h4>Допомога</h4>
          <ul>
            <li>
              <Link>Доставка та оплата</Link>
            </li>
            <li>
              <Link>Питання і відповіді</Link>
            </li>
            <li>
              <Link>Розмірна таблиця</Link>
            </li>
            <li>
              <Link>Оптові закупівлі</Link>
            </li>
          </ul>
        </div>
        <div className={styles.forwardUs}>
          <h4>Слідкуй за нами</h4>
          <div className={styles.forwardUsContent}>
            <ul>
              <li>
                <Link>Про нас</Link>
              </li>
              <li>
                <Link>Вакансії</Link>
              </li>
            </ul>
            <a className={styles.link}>
              <SvgInstagram /> <p>Instagram</p>
            </a>
            <a className={styles.link}>
              <SvgTelegram /> <p> Telegram </p>
            </a>
          </div>
        </div>
        <div className={styles.contacts}>
          <h4>Контакти:</h4>
          <ul>
            <li>kozashop@gmail.com</li>
            <li>+38097-214-42-24</li>
            <li>
              м. Київ, Україна <br /> вул. Центральна, 19
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
