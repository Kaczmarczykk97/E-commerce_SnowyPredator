// import classes from "./Shop.module.css";

import Header from "../../Components/Header/Header";
import Sponsors from "../../Components/Sponsors/Sponsors";
import StartAdventure from "../../Components/StartAdventure/StartAdventure";
import Popular from "../../Components/Popular/Popular";
import Offers from "../../Components/Offers/Offers";
import NewProducts from "../../Components/NewProducts/NewProducts";
import MovieAboutShop from "../../Components/MovieAboutShop/MovieAboutShop";
import Ratings from "../../Components/Ratings/Ratings";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

function Shop() {
  return (
    <div>
      <Header />
      <Sponsors />
      <StartAdventure />
      <Popular />
      <Offers />
      <NewProducts />
      <MovieAboutShop />
      <Ratings />
      <NewsLetter />
    </div>
  );
}

export default Shop;
