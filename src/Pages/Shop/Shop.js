// import classes from "./Shop.module.css";

import Header from "../../Components/Header/Header";
import Sponsors from "../../Components/Sponsors/Sponsors";
import StartAdventure from "../../Components/StartAdventure/StartAdventure";
import Popular from "../../Components/Popular/Popular";
import Crew from "../../Components/Crew/Crew";
import Offers from "../../Components/Offers/Offers";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Ambassador from "../../Components/Ambassador/Ambassador";
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
      <Crew />
      <Offers />
      <NewProducts />
      <Ambassador />
      <MovieAboutShop />
      <Ratings />
      <NewsLetter />
    </div>
  );
}

export default Shop;
