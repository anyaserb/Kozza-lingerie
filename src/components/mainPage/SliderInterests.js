import styles from "./SliderInterests.module.css";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SvgArrow from "../svg/SvgArrow";
import SvgCardLike from "../svg/SvgCardLike";
import SvgCardBasket from "../svg/SvgCardBasket";
import { useLoaderData } from "react-router-dom";

// const DUMMY_INTERESTS = [
//   {
//     id: 0,
//     name: "Бюстгальтер “Queen”",
//     image: "images/interests/img1.png",
//     price: "340 грн",
//     colors: ["#000000", "#EFF0EA", "#E84A5F"]
//   },
//   {
//     id: 1,
//     name: "Бюстгальтер “Aerosmith”",
//     image: "images/interests/img2.png",
//     price: "450 грн",
//     colors: ["#600E16", "#D7D7D7", "#0095D6"]
//   },
//   {
//     id: 2,
//     name: "Комплект “Spice Girls”",
//     image: "images/interests/img3.png",
//     price: "630 грн",
//     colors: ["#96625E", "#D7D7D7", "#006422"]
//   },
//   {
//     id: 3,
//     name: "Трусики “Lorem”",
//     image: "images/interests/img4.png",
//     price: "250 грн",
//     colors: ["#000000", "#D7D7D7", "#A557B1"]
//   },
//   {
//     id: 4,
//     name: "Бюстгальтер “Aerosmith”",
//     image: "images/interests/img1.png",
//     price: "450 грн",
//     colors: ["#000000", "#EFF0EA", "#E84A5F"]
//   }
// ];

const SliderInterests = () => {
  const data = useLoaderData();

  const initialSlide = 0;
  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    rows: 1,
    customPaging: function (i) {
      return <button></button>;
    },
    dotsClass: "slick-dots slick-thumb"
  };

  return (
    <div className={styles.container}>
      <h2>
        <Link>Що може тебе зацікавити?</Link>
      </h2>
      <Slider ref={slider} {...settings} className={styles.collection}>
        {Object.keys(data).map((productId, index) => {
          const item = data[productId];

          return (
            <Link key={index}>
              <div className={styles.cardCollections}>
                <img src={item.images[0]} alt="" />
                <div className={styles.svgLike}>
                  <SvgCardLike />
                </div>
                <div className={styles.blackBox}>
                  <h3>{item.name}</h3>
                  <ul className={styles.colors}>
                    {item.colors.map((color, index) => {
                      return (
                        <li key={index} style={{ backgroundColor: color }}></li>
                      );
                    })}
                  </ul>
                  <div className={styles.price}>{item.price}</div>
                  <div className={styles.svgCardBasket}>
                    <SvgCardBasket />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
      <div className={styles.buttonContainer}>
        <button
          className={styles.buttonPrev}
          onClick={() => slider?.current?.slickPrev()}
        >
          <SvgArrow
            svgArrow={styles.svgArrow}
            svgCircle={styles.svgCircle}
            svgPath={styles.svgPath}
          />
        </button>
        <button
          className={styles.buttonNext}
          onClick={() => slider?.current?.slickNext()}
        >
          <SvgArrow
            svgArrow={styles.svgArrow}
            svgCircle={styles.svgCircle}
            svgPath={styles.svgPath}
          />
        </button>
      </div>
    </div>
  );
};

export default SliderInterests;
