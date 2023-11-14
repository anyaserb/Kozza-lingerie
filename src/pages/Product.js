import ProductCard from "../components/product/ProductCard";
import SliderInterests from "../components/mainPage/SliderInterests";
import Footer from "../components/mainPage/Footer";

function Product(props) {
  return (
    <>
      <ProductCard />
      <SliderInterests />
      <Footer />
    </>
  );
}

export default Product;

export const productLoader = async () => {
  const res = await fetch(
    "https://kozza-lingerie-default-rtdb.firebaseio.com/clothes.json"
  );

  return res.json();
};
