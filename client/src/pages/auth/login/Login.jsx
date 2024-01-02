import "./login.scss";
import loginImage from "../../../assets/loginImage.jpg";
import handGreeting from "../../../assets/handGreeting.svg.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../components/context/MainContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [err, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginData);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
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
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                minLength={8}
                autoComplete="on"
                onChange={handleChange}
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
              <a href="/register">Sign up</a>
            </div>
          </div>
        </div>
        <div className="imagePart">
          <img src={loginImage} alt="people smiling" />
        </div>
      </div>
      {err && (
        <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
          {err}
        </p>
      )}
    </main>
  );
};

export default Login;
