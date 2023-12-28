import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profileBackground">
        <img
          className="cover"
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cover image"
        />
      </div>
      <div className="profileContainer">
        <div id="profileShare" className="profileShare">
          <img
            className="profilePic"
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="profile picture"
          />
          <h1>John Doe</h1>
          <div className="profileShareContainer">
            <div className="profileSocialMedia">
              <a id="darkLink" href="http://facebook.com">
                <FacebookTwoToneIcon fontSize="large" />
              </a>
              <a id="darkLink" href="http://linkedin.com">
                <LinkedInIcon fontSize="large" />
              </a>
              <a id="darkLink" href="http://instagram.com">
                <InstagramIcon fontSize="large" />
              </a>
              <a id="darkLink" href="http://pinterest.com">
                <PinterestIcon fontSize="large" />
              </a>
              <a id="darkLink" href="http://twitter.com">
                <TwitterIcon fontSize="large" />
              </a>
            </div>
            <div className="location">
              <div className="locationPlace">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="locationEmail">
                <LanguageIcon />
                <span>hrvoje.dev</span>
              </div>
            </div>
            <div className="profileEmail">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
