import person from "../../assets/person.avif";
import likes from "../../assets/heart.svg";
import comment from "../../assets/comment.svg";
import share from "../../assets/share-button.svg";

const HomeComponent = () => {
  return (
    <main className="center">
      <div className="usersPicture"></div>
      <div className="posts">
        <div className="post">
          <div className="header">
            <div className="headerLeft">
              <div className="firstPart">
                <img src={person} alt="user picture" />
              </div>
              <div className="secondPart">
                <h3>John Doe</h3>
                <span>A few seconds ago</span>
              </div>
            </div>
            <div className="headerRight">
              <span>...</span>
            </div>
          </div>
          <div className="mainPart">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              iusto nihil excepturi! Cum sed necessitatibus quaerat optio minima
              possimus sequi eaque reiciendis rem, sint assumenda, eos accusamus
              magni debitis facere!
            </p>
            <img src={person} alt="post picture" />
            <div className="shareAndComment">
              <div className="iconPart">
                <img src={likes} alt="heart icon" />
                <span>Likes</span>
              </div>
              <div className="iconPart">
                <img src={comment} alt="comment icon" />
                <span>Comments</span>
              </div>
              <div className="iconPart">
                <img src={share} alt="share icon" />
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
