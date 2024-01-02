import apple from "../../../assets/apple.svg";
import google from "../../../assets/google.svg";
import meta from "../../../assets/facebook.svg";
import email from "../../../assets/email.svg";
import "./register.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <main className="register">
      <div className="container">
        <div className="bottom">
          <div className="welcomePart">
            <div className="welcomeLeft">
              <img src={email} alt="email icon" />
              <span></span>
            </div>
            <div className="welcomeRight">
              <h2>Welcome! First things first...</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="registerPart">
            <div className="innerContainer">
              <div className="registerHeading">
                <h2>Create an account</h2>
              </div>
              <form
                id="registerForm"
                name="registerForm"
                className="registerForm"
              >
                <div className="inputLabel">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    onChange={handleChange}
                    name="fullName"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="inputLabel">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleChange}
                    name="email"
                    placeholder="example.email@gmail.com"
                    type="email"
                  />
                </div>
                <div className="inputLabel">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={handleChange}
                    name="password"
                    placeholder="Enter at least 8 characters"
                    minLength={8}
                    pattern="^(?=.{8,})(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)[a-zA-Z0-9\s]*$"
                    title="Your password must be at least eight characters long, contain at least one uppercase letter, one lowercase letter, and one number, and not contain any whitespace."
                    type="password"
                  />
                </div>
                <button onClick={handleRegister}>Sign up</button>
              </form>
              <div className="signUpOptions">
                <p>Or sign up with</p>
                <div className="signUpIcons">
                  <button>
                    <img src={google} alt="google icon" />
                  </button>

                  <button>
                    <img id="facebook" src={meta} alt="meta icon" />
                  </button>
                  <button>
                    <img src={apple} alt="apple icon" />
                  </button>
                </div>
              </div>
              <p>Already have an account?</p>
              <a href="/login">Sign in</a>
            </div>
          </div>
        </div>
        {err && (
          <p style={{ color: "red", padding: "1rem", fontWeight: "bold" }}>
            {err}
          </p>
        )}
      </div>
    </main>
  );
};

export default Register;
