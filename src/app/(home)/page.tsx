import Article1 from "@/components/Article1";
import Article2 from "@/components/Article2";
import Article3 from "@/components/Article3";
import Article4 from "@/components/Article4";
import Podcast from "@/components/PodcastSlider";
import VideoArticle1 from "@/components/VideoArticle1";
import VideoArticle2 from "@/components/VideoArticle2";
import { getIsLandinPage, Nyheder } from "@/data/articleData";
import { getVideor, Video } from "@/data/videoData";

const Home = async () => {

  const landingNyheder: Nyheder[] = await getIsLandinPage();
  const landingVideo: Video[] = await getVideor();

  return (
    <>
      <Article1 item={landingNyheder[0]} />
      <Article2 items={landingNyheder.slice(1, 3)} />
      {landingNyheder.slice(3, 5).map((item) => (
        <Article3 key={item._id} item={item} />
      ))}
      <Article4 />
      <VideoArticle1 items={landingVideo.slice(0, 3)} />
      <VideoArticle2 item={landingVideo[3]}/>
      <Podcast />
    </>
  );
};

export default Home;
