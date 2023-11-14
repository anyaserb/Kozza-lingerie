import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import SvgLike from "../svg/SvgLike";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import Star from "./Star";
import ImageProductCard from "./ImageProductCard";
import Colors from "./Colors";
import TabsProduct from "./TabsProduct";

const DUMMY_PRODUCT_CARDS = {
  id: 0,
  name: "Timbaland",
  stars: "4.5",
  description: (
    <div>
      <p>
        Мереживний бралет з широким поясом бра, зручний в посадці та комфортний
        у носінні.
      </p>
      <p>
        Чашка ззовні з еластичного мережива, а зсередини на сітчастій підкладці
        — надає підтримку та фіксацію грудей.
      </p>
    </div>
  ),
  colors: ["#FF8383", "#6FC7B7", "#FFFFFF"],
  sizes: ["65A", "90D", "90F", "65A", "90D", "90F", "65A", "90D", "90F"],
  price: "500",
  images: [
    "images/productTest/img1.png",
    "images/productTest/img2.png",
    "images/productTest/img3.png"
  ],
  characteristics: (
    <div>
      <p>Бра без каркасів з трикутною чашкою;</p>
      <br />
      <p>Чашки з'єднані на запах, завдяки чому бра збирає груди до центру;</p>
      <br />

      <p>Головна особливість — безшовна клейова обробка країв;</p>
      <br />

      <p>Безшовні вшиті бретелі — невідчутні на тілі;</p>
      <br />

      <p>Металева фурнітура в тон кольору бра;</p>
      <br />

      <p>Чашки з'єднані на запах, завдяки чому бра збирає груди до центру.</p>
    </div>
  ),
  composition: (
    <div>
      <p>Мікрофібра: 90% поліамід, 10% еластан;</p>
      <br />
      <p>Сітка: 71% поліамід, 29% еластан.</p>
    </div>
  )
};

const ProductCard = (props) => {
  const [selected, setSelected] = useState(DUMMY_PRODUCT_CARDS.sizes[0]);


  return (
    <>
      <div className={styles.productCardContainer}>
        <div className={styles.imageSlider}>
          <ImageProductCard images={DUMMY_PRODUCT_CARDS.images} />
        </div>
        <div className={styles.productInformation}>
          <div className={styles.productHeader}>
            <h3>{DUMMY_PRODUCT_CARDS.name}</h3>
            <div className={styles.rating}>
              <Star
                stars={DUMMY_PRODUCT_CARDS.stars}
                reviews={DUMMY_PRODUCT_CARDS.reviews}
              />
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.description}>
            {DUMMY_PRODUCT_CARDS.description}
          </div>
          <div className={styles.line}></div>
          <div className={styles.characteristics}>
            <Colors colors={DUMMY_PRODUCT_CARDS.colors} />
            <div className={styles.size}>
              <Dropdown
                data={DUMMY_PRODUCT_CARDS.sizes}
                selected={selected}
                setSelected={setSelected}
              />
              <Link>Розмірна сітка</Link>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.productFooter}>
            <div>{DUMMY_PRODUCT_CARDS.price} ₴</div>
            <button>
              <SvgLike svgLike={styles.svgLike} />
            </button>
            <button>В корзину</button>
          </div>
        </div>
      </div>
      <TabsProduct
        characteristics={DUMMY_PRODUCT_CARDS.characteristics}
        composition={DUMMY_PRODUCT_CARDS.composition}
        reviews={DUMMY_PRODUCT_CARDS.reviews}
      />
    </>
  );
};

export default ProductCard;

