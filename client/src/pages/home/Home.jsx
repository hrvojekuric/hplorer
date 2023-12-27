import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import Stories from "../../components/stories/Stories";
import "./home.scss";

const Home = () => {
  return (
    <main>
      <Stories />
      <Share />
      <Posts />
    </main>
  );
};

export default Home;
