import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ModeContext } from "../context/MainContext";
import { AuthContext } from "../context/MainContext";
import logo from "../../assets/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { toggle, darkMode } = useContext(ModeContext);
  const { currentUser } = useContext(AuthContext);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout");
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="navbar ">
      <div className="left">
        <Link id="blackTheme" className="link" data-testid="homeLink" to="/">
          <img className="logo" src={logo} alt="butterfly wings" />
          <h1>HPLORER</h1>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />
        ) : (
          <DarkModeOutlinedIcon
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input id="white" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <LogoutIcon onClick={logout} style={{ cursor: "pointer" }} />
        <PersonOutlinedIcon id="icon" />
        <EmailOutlinedIcon id="icon" />
        <NotificationsOutlinedIcon id="icon" />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
