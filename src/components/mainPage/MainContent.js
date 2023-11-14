import styles from "./MainContent.module.css";
import Swiper from "./Slider";
import SliderInterests from "./SliderInterests";
import { Link } from "react-router-dom";
import Subscription from './Subscription'

const DUMMY_WHYWE = [
  {
    id: 0,
    text: "Наш офлайн-магазин, в якому ти завжди зможеш розраховувати на дружній прийом ",
    image: "images/whyWe/img1.png"
  },
  {
    id: 1,
    text: "Ми любимо тебе будь-якою! Просто пам’ятай, що ти неймовірна!",
    image: "images/whyWe/img2.png"
  },
  {
    id: 2,
    text: "Безкоштовна доставка на нову пошту при замовленні на суму від 800 грн!",
    image: "images/whyWe/img3.png"
  }
];

const MainContent = (props) => {
  return (
    <>
      <div className={styles.collections}>
        <h2>
          <Link>Колекції</Link>
        </h2>
        <Swiper />
      </div>
      <div className={styles.collections}>
        <SliderInterests />
      </div>
      <div className={styles.collections}>
        <h2>Чому жінки обирають нас?</h2>
        <div className={styles.whyWe}>
          {DUMMY_WHYWE.map((item) => {
            return (
                <div className={styles.cardCollections} key={item.id}>
                  <img src={item.image} alt="" />
                  <h3>{item.text}</h3>
                </div>
            );
          })}
        </div>
      </div>
      <Subscription/>
    </>
  );
};

export default MainContent;
