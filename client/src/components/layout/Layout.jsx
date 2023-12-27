import { ModeContext } from "../context/MainContext";
import LeftBar from "../leftBar/LeftBar";
import RightBar from "../rightBar/RightBar";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useContext } from "react";
import "./layout.scss";

const Layout = () => {
  const { darkMode } = useContext(ModeContext);
  return (
    <main className={`layoutTop ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div className="layoutBottom">
        <LeftBar className="leftBar" />
        <div id="outline" className="outlet">
          <Outlet />
        </div>
        <RightBar className="rightBar" />
      </div>
    </main>
  );
};

export default Layout;
