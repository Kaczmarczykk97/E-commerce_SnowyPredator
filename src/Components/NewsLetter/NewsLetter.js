import classes from "./NewsLetter.module.css";

function NewsLetter() {
  return (
    <div className={classes["newsletter"]}>
      <div className={classes["newsletter-container--text"]}>
        <h2>Stay Informed with</h2>
        <h2>Our Newsletter</h2>
        <p>
          Sign up for our newsletter to receive special offers and stay updated!
        </p>
        <div>
          <input type="email" placeholder="Your email id" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
