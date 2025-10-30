import WeatherCard from "@/components/WeatherCard";
import Article1 from "@/components/Article1";
import Article2 from "@/components/Article2";
import { getWeatherArticles } from "@/data/articleData";
import VideoArticle2 from "@/components/VideoArticle2";
import { getVideor, Video } from "@/data/videoData";

const Page = async () => {
  const weatherData = await getWeatherArticles();
  const landingVideo: Video[] = await getVideor();
  

  return (
    <>
      <Article1 item={weatherData[0]} />
      <Article2 items={weatherData.slice(1, 3)} />
      <WeatherCard />
      <VideoArticle2 item={landingVideo[0]}/>
      <VideoArticle2 item={landingVideo[1]}/>
    </>
  );
};

export default Page;
