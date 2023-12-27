import person from "../../assets/person.avif";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <main id="rightBar" className="rightBar">
      <div className="rightBarContainer">
        <div id="suggestion" className="suggestions">
          <div className="headerSuggestion">
            <h3>Suggestions For You</h3>
          </div>
          <div className="suggestionContent">
            <div className="leftSuggestions">
              <img src={person} alt="suggestion user picture" />
              <h3>Jane Doe</h3>
            </div>
            <div className="rightSuggestions">
              <button className="follow">Follow</button>
              <button className="dismiss">Dismiss</button>
            </div>
          </div>
          <div className="suggestionContent">
            <div className="leftSuggestions">
              <img src={person} alt="suggestion user picture" />
              <h3>Jane Doe</h3>
            </div>
            <div className="rightSuggestions">
              <button className="follow">Follow</button>
              <button className="dismiss">Dismiss</button>
            </div>
          </div>
        </div>

        <div id="latestActivities" className="latestActivities">
          <div className="headerActivities">
            <h3>Latest Activities</h3>
          </div>
          <div className="activitiesContent">
            <div className="leftActivities">
              <img src={person} alt="activity user picture" />
              <h3>Jane Doe</h3>
              <p>changed their cover picture</p>
            </div>
            <div className="rightActivities">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="activitiesContent">
            <div className="leftActivities">
              <img src={person} alt="activity user picture" />
              <h3>Jane Doe</h3>
              <p>posted</p>
            </div>
            <div className="rightActivities">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="activitiesContent">
            <div className="leftActivities">
              <img src={person} alt="activity user picture" />
              <h3>Jane Doe</h3>
              <p>liked a post</p>
            </div>
            <div className="rightActivities">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="activitiesContent">
            <div className="leftActivities">
              <img src={person} alt="activity user picture" />
              <h3>Jane Doe</h3>
              <p>liked a comment</p>
            </div>
            <div className="rightActivities">
              <span>1 min ago</span>
            </div>
          </div>
        </div>
        <div id="onlineFriends" className="onlineFriends">
          <div className="onlineHeader">
            <h3>Online Friends</h3>
          </div>
          <div className="onlineContent">
            <div className="onlineUserIcon">
              <img src={person} alt="online user picture" />
              <span></span>
            </div>
            <h3>Jane Doe</h3>
          </div>
          <div className="onlineContent">
            <div className="onlineUserIcon">
              <img src={person} alt="online user picture" />
              <span></span>
            </div>
            <h3>Jane Doe</h3>
          </div>
          <div className="onlineContent">
            <div className="onlineUserIcon">
              <img src={person} alt="online user picture" />
              <span></span>
            </div>
            <h3>Jane Doe</h3>
          </div>
          <div className="onlineContent">
            <div className="onlineUserIcon">
              <img src={person} alt="online user picture" />
              <span></span>
            </div>
            <h3>Jane Doe</h3>
          </div>
          <div className="onlineContent">
            <div className="onlineUserIcon">
              <img src={person} alt="online user picture" />
              <span></span>
            </div>
            <h3>Jane Doe</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RightBar;
