import Banner from "../components/mainPage/Banner";
import AboutUs from "../components/mainPage/AboutUs";
import MainContent from "../components/mainPage/MainContent";
import Footer from "../components/mainPage/Footer";

function MainPage() {
  return (
    <>
      <Banner />
      <AboutUs />
      <MainContent />
      <Footer />
    </>
  );
}

export default MainPage;

export const productLoader = async () => {
  const res = await fetch(
    "https://kozza-lingerie-default-rtdb.firebaseio.com/clothes.json"
  );

  return res.json();
};
