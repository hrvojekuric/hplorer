import person from "../../assets/person.avif";
import friends from "../../assets/1.png";
import groups from "../../assets/2.png";
import marketplace from "../../assets/3.png";
import watch from "../../assets/4.png";
import memories from "../../assets/5.png";
import events from "../../assets/6.png";
import gaming from "../../assets/7.png";
import gallery from "../../assets/8.png";
import videos from "../../assets/9.png";
import messages from "../../assets/10.png";
import fundraiser from "../../assets/11.png";
import tutorials from "../../assets/12.png";
import courser from "../../assets/13.png";
import "./leftBar.scss";

const LeftBar = () => {
  return (
    <main className="leftBar">
      <div className="container ">
        <div className="important ">
          <div className="user ">
            <img src={person} alt="user image" />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={friends} alt="friends icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={groups} alt="group icon" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={marketplace} alt="marketplace icon" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={watch} alt="watch icon" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memories} alt="memories icon" />
            <span>Memories</span>
          </div>
        </div>
        <div className="shortcuts">
          <span className="yourShortcuts">Your shortcuts</span>
          <div className="item">
            <img src={events} alt="events icon" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={gaming} alt="gaming icon" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery} alt="gallery icon" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={videos} alt="videos icon" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={messages} alt="messages icon" />
            <span>Messages</span>
          </div>
        </div>
        <div className="others">
          <span className="others">Others</span>
          <div className="item">
            <img src={fundraiser} alt="fundraiser icon" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={tutorials} alt="tutorials icon" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={courser} alt="courses icon" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeftBar;
