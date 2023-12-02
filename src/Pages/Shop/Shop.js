// import classes from "./Shop.module.css";

import Header from "../../Components/Header/Header";
import Popular from "../../Components/Popular/Popular";
import Offers from "../../Components/Offers/Offers";
import NewProducts from "../../Components/NewProducts/NewProducts";
import StartAdventure from "../../Components/StartAdventure/StartAdventure";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

function Shop() {
  return (
    <div>
      <Header />
      <StartAdventure />
      <Popular />
      <Offers />
      <NewProducts />
      <NewsLetter />
    </div>
  );
}

export default Shop;
