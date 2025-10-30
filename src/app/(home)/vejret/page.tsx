import WeatherCard from "@/components/WeatherCard";
import Article1 from "@/components/Article1";
import Article2 from "@/components/Article2";
import { getWeatherArticles } from "@/data/articleData";
import VideoArticle2 from "@/components/VideoArticle2";
import { getVideor, Video } from "@/data/videoData";

const Page = async () => {
  const weatherData = await getWeatherArticles(); // Henter vejrfokuserede artikler og gemmer dem i weatherData arrayet
  const landingVideo: Video[] = await getVideor(); // Henter video-artikler og gemmer dem i landingVideo arrayet
  

  return (
    <>
      <Article1 item={weatherData[0]} /> {/* Render den første vejrfokuserede artikel, brug første element fra weatherData arrayet */}
      <Article2 items={weatherData.slice(1, 3)} /> {/* Render de næste to vejrfokuserede artikler (artiklerne på indeks 1 og 2) */}
      <WeatherCard /> {/* Render WeatherCard komponenten, som sandsynligvis viser vejrfunktioner */}
      <VideoArticle2 item={landingVideo[0]}/> {/* Render den første video-artikel, brug første video fra landingVideo arrayet */}
      <VideoArticle2 item={landingVideo[1]}/> {/* Render den anden video-artikel, brug anden video fra landingVideo arrayet */}
    </>
  );
};

export default Page;
