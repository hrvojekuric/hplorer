import "./login.scss";
import loginImage from "../../../assets/loginImage.jpg";
import handGreeting from "../../../assets/handGreeting.svg.png";
import { useContext } from "react";
import { AuthContext } from "../../../components/context/MainContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };
  return (
    <main className="login">
      <div className="container">
        <div className="loginPart">
          <div className="innerContainer">
            <div className="loginHeading">
              <div className="welcomePart">
                <h2>Welcome back</h2>
                <img src={handGreeting} alt="icon of a hand" />
              </div>

              <p>Log in your account</p>
            </div>
            <form id="loginForm" name="loginForm" className="loginForm">
              <input
                name="email"
                placeholder="What is your email?"
                type="email"
                autoComplete="on"
              />
              <input
                name="password"
                placeholder="Enter your password"
                minLength={8}
                autoComplete="on"
              />
              <div className="additionalOptions">
                <div className="checkboxPart">
                  <input name="checkbox" id="checkbox" type="checkbox" />
                  <label htmlFor="checkbox">Remmember me</label>
                </div>
                <p>Forgot password?</p>
              </div>
              <button onClick={handleLogin}>Continue</button>
            </form>
            <div className="signInOptions">
              <p>Dont't have an account? </p>
              <a href="">Sign up</a>
            </div>
          </div>
        </div>
        <div className="imagePart">
          <img src={loginImage} alt="people smiling" />
        </div>
      </div>
    </main>
  );
};

export default Login;
