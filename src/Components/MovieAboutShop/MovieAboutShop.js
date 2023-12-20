import classes from "./MovieAboutShop.module.css";

function MovieAboutShop() {
  return (
    <div className={classes["movieAboutShop-container"]}>
      <h2>Check our gear in action</h2>
      <hr />
      <div className={classes["movie-wrapper"]}>
        <iframe
          src="https://www.youtube.com/embed/02ZL5y2TY_o?si=sQ2_ZN3owxnKerYA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}

export default MovieAboutShop;
