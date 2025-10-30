import { Podcast } from "@/data/podcastData";

interface PodcastCardProps {
  podcast: Podcast;
}
const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <li className="bg-white border p-6 flex flex-col sm:flex-row gap-4 md:gap-x-5">
      <img
        className=" md:w-48 h-40 object-cover"
        src={`http://localhost:3001/assets/podcast/${podcast.thumbnail}`}
        alt={podcast.headline}
      />

      <section className="flex flex-col flex-1">
        <h3>
          <strong>{podcast.headline}</strong>
        </h3>
        <p>{podcast.info}</p>
        <p>
          {podcast.length} <span>minutter</span>
        </p>
        <audio controls className="mt-auto w-full pt-5">
          <source
            src={`http://localhost:3001/assets/podcast/${podcast.podcast}`}
            type="audio/mp3"
          />
        </audio>
      </section>
    </li>
  );
};

export default PodcastCard;
