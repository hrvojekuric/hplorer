import "./share.scss";
import { AuthContext } from "../context/MainContext";
import file from "../../assets/file.png";
import map from "../../assets/map.png";
import friend from "../../assets/1.png";
import { useContext } from "react";

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div id="share" className="share">
      <div className="shareContainer">
        <div className="top">
          <img src={currentUser.profilePic} alt="current user picture" />
          <input
            id="white"
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={file} alt="" />
                <span id="white">Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={map} alt="" />
              <span id="white">Add Place</span>
            </div>
            <div className="item">
              <img src={friend} alt="" />
              <span id="white">Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
