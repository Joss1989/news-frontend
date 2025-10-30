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

  
  const landingNyheder: Nyheder[] = await getIsLandinPage(); // Henter artiklerne til landing-siden (returnerer en array af Nyheder objekter)
  const landingVideo: Video[] = await getVideor(); // Henter video-artiklerne til landing-siden (returnerer en array af Video objekter)

  return (
    <>
      <Article1 item={landingNyheder[0]} /> {/* Render den første artikel, og giver den første artikel fra landingNyheder data */}
      <Article2 items={landingNyheder.slice(1, 3)} /> {/* Render den anden artikel, og giver de næste 2 artikler (1 og 2 fra arrayet) */}
      {/* Render flere Article3 komponenter ved at iterere over en delmængde af landingNyheder arrayet (artikler 3 og 4) */}
      {landingNyheder.slice(3, 5).map((item) => (
        <Article3 key={item._id} item={item} /> // Giv hver artikel et unikt 'key' (id fra artiklen)
      ))}
      <Article4 /> {/* Render Article4 komponenten (kan være statisk eller dynamisk indhold) */}
      <VideoArticle1 items={landingVideo.slice(0, 3)} /> {/* Render den første samling af video-artikler, og giver de første 3 videoer fra landingVideo data */}
      <VideoArticle2 item={landingVideo[3]} /> {/* Render en enkelt video-artikel, og giver den 4. video fra landingVideo data */}
      <Podcast /> {/* Render Podcast slider komponenten */}
    </>
  );
};

export default Home; // Eksporter Home komponenten som default eksport fra denne fil
