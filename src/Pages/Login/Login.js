import classes from "./Login.module.css";
import video from "../../Components/imgs/bg_video.mp4";

function Login() {
  return (
    <div className={classes["login"]}>
      <video
        src={video}
        autoPlay
        muted
        loop
        className={classes["background-video"]}
      ></video>
      <div className={classes["login-container"]}>
        <h2>Sign Up</h2>
        <div className={classes["login-container--form"]}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>Continue</button>
        <p className={classes["have-account--text"]}>
          Already have an account? <span>Login here</span>
        </p>
        <div className={classes["terms-accept--container"]}>
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privace policy</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
