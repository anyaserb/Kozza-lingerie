import styles from "./Slider.module.css";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SvgArrow from "../svg/SvgArrow";

const DUMMY_COLLECTIONS = [
  {
    id: 0,
    name: "Базова",
    image: "images/collections/img1.png"
  },
  {
    id: 1,
    name: "Мереживна",
    image: "images/collections/img2.png"
  },
  {
    id: 2,
    name: "Коригуюча",
    image: "images/collections/img3.png"
  },
  {
    id: 3,
    name: "Спортивна",
    image: "images/collections/img4.png"
  },
  {
    id: 4,
    name: "Шовк",
    image: "images/collections/img1.png"
  }
];

const Swiper = () => {
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
    <>
      <Slider ref={slider} {...settings} className={styles.collection}>
        {DUMMY_COLLECTIONS.map((item) => {
          return (
            <Link key={item.id}>
              <div className={styles.cardCollections} >
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
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
    </>
  );
};

export default Swiper;
