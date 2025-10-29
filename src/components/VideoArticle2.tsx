import { Video } from "@/data/videoData";

interface VideoProps {
  item: Video;
}
const VideoArticle2 = ({ item }: VideoProps) => {
  return (
    <section className="col-span-4 md:col-span-2 h-full hidden md:block">
      <video controls className="w-full">
        <source
          src={`http://localhost:3001/assets/video/${item.url}`}
          type="video/mp4"
        />
      </video>
      <div className="flex flex-col">
        <h2>{item.description}</h2>
        <p className="leading-5">{item.description}</p>
        <p className="text-[#e89700] capitalize mb-2">Nyheder <span className="text-[#999999]"> | {new Date(item.duration).getMinutes()} minutter
          </span>
        </p>
      </div>
    </section>
  );
};

export default VideoArticle2;
