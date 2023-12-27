import apple from "../../../assets/apple.svg";
import google from "../../../assets/google.svg";
import meta from "../../../assets/facebook.svg";
import email from "../../../assets/email.svg";
import "./register.scss";

const Register = () => {
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
                  <label htmlFor="username">Full name</label>
                  <input name="username" placeholder="John Doe" type="text" />
                </div>
                <div className="inputLabel">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    placeholder="example.email@gmail.com"
                    type="email"
                  />
                </div>
                <div className="inputLabel">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    placeholder="Enter at least 8 characters"
                    minLength={8}
                    pattern="^(?=.{8,})(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)[a-zA-Z0-9\s]*$"
                    title="Your password must be at least eight characters long, contain at least one uppercase letter, one lowercase letter, and one number, and not contain any whitespace."
                    type="password"
                  />
                </div>

                <button>Sign up</button>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
