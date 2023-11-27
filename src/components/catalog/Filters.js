import FilterReusable from "./FilterReusable";
import FiltersSizes from "./FiltersSizes";
import FilterColor from "./FilterColor";
import FilterPrice from "./FilterPrice";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

const cupSizes = ["A", "B", "C", "D", "E", "F", "G", "H"];
const braSizes = [
  "60",
  "65",
  "70",
  "75",
  "80",
  "85",
  "90",
  "95",
  "100",
  "105",
  "110"
];
const pantiesSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

const Filters = (props) => {
  const data = useLoaderData();
  const [clothes, setClothes] = useState([]);
  const [displayedColor, setDisplayedColor] = useState([]);
  const [displayedStyleBraArray, setDisplayedStyleBraArray] = useState([]);
  const [fullStyleBraArray, setFullStyleBraArray] = useState([]);
  const [displayedStylePantiesArray, setDisplayedStylePantiesArray] = useState(
    []
  );
  const [fullStylePantiesArray, setFullStylePantiesArray] = useState([]);
  const [displayedBrand, setDisplayedBrand] = useState([]);
  const [fullDisplayedBrand, setFullDisplayedBrand] = useState([]);
  const [displayedCollection, setDisplayedCollection] = useState([]);
  const [fullDisplayedCollection, setFullDisplayedCollection] = useState([]);
  const [displayedFabric, setDisplayedFabric] = useState([]);
  const [fullDisplayedFabric, setFullDisplayedFabric] = useState([]);

  useEffect(() => {
    let clothesArray = [];

    for (let key in data) {
      clothesArray.push(data[key]);
    }
    setClothes(clothesArray);
  }, [data]);

  useEffect(() => {
    let brandArray = [];
    let filterBrandArray = [];
    clothes.map((item) => {
      brandArray.push(item.brand);

      if (!filterBrandArray.includes(item.brand)) {
        filterBrandArray.push(item.brand);
      }
    });
    setDisplayedBrand(filterBrandArray);
    setFullDisplayedBrand(brandArray);

    let filterColorArray = [];
    clothes.map((item) => {
      item.colors.map((color) => {
        if (!filterColorArray.includes(color)) {
          filterColorArray.push(color);
        }
      });
    });
    setDisplayedColor(filterColorArray);

    let styleBraArray = [];
    let filterStyleBraArray = [];
    clothes.map((item) => {
      styleBraArray.push(item.styleBra);
      if (
        !filterStyleBraArray.includes(item.styleBra) &&
        item.styleBra !== undefined
      ) {
        filterStyleBraArray.push(item.styleBra);
      }
    });
    setDisplayedStyleBraArray(filterStyleBraArray);
    setFullStyleBraArray(styleBraArray);

    let stylePantiesArray = [];
    let filterStylePantiesArray = [];
    clothes.map((item) => {
      stylePantiesArray.push(item.stylePanties);
      if (
        !filterStylePantiesArray.includes(item.stylePanties) &&
        item.stylePanties !== undefined
      ) {
        filterStylePantiesArray.push(item.stylePanties);
      }
    });
    setDisplayedStylePantiesArray(filterStylePantiesArray);
    setFullStylePantiesArray(stylePantiesArray);

    let fabricArray = [];
    let filterFabricArray = [];
    clothes.map((item) => {
      fabricArray.push(item.fabric);

      if (!filterFabricArray.includes(item.fabric)) {
        filterFabricArray.push(item.fabric);
      }
    });
    setDisplayedFabric(filterFabricArray);
    setFullDisplayedFabric(fabricArray);

    let collectionArray = [];
    let filterCollectionArray = [];
    clothes.map((item) => {
      collectionArray.push(item.collection);

      if (!filterCollectionArray.includes(item.collection)) {
        filterCollectionArray.push(item.collection);
      }
    });
    setDisplayedCollection(filterCollectionArray);
    setFullDisplayedCollection(collectionArray);
  }, [clothes]);

  const filterSizes = (checkbox) => {
    console.log(checkbox)
  }

  return (
    <div>
      <FilterReusable
        header={"Бренд"}
        displayedClothes={displayedBrand}
        filter={fullDisplayedBrand}
      />
      <FilterPrice />
      <FiltersSizes onFilter={props.onFilter} header={"Розмір чашки"} measure={cupSizes} />
      <FiltersSizes header={"Обхват під грудьми"} measure={braSizes} />
      <FiltersSizes header={"Розмір трусиків"} measure={pantiesSizes} />
      <FilterColor header={"Колір"} color={displayedColor} />
      <FilterReusable
        header={"Стиль бра"}
        displayedClothes={displayedStyleBraArray}
        filter={fullStyleBraArray}
      />
      <FilterReusable
        header={"Стиль трусиків"}
        displayedClothes={displayedStylePantiesArray}
        filter={fullStylePantiesArray}
      />
      <FilterReusable
        header={"Колекція"}
        displayedClothes={displayedCollection}
        filter={fullDisplayedCollection}
      />
      <FilterReusable
        header={"Фактура"}
        displayedClothes={displayedFabric}
        filter={fullDisplayedFabric}
      />
    </div>
  );
};

export default Filters;
