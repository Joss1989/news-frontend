import { Video } from "@/data/videoData";

interface VideoProps {
  item: Video;
}
const VideoArticle2 = ({ item }: VideoProps) => {
  return (
    <section className="col-span-2 h-full">
      <video controls className="w-full">
        <source
          src={`http://localhost:3001/assets/video/${item.url}`}
          type="video/mp4"
        />
      </video>
      <div className="flex flex-col">
        <h2>{item.description}</h2>
        <p className="leading-5">{item.description}</p>
        <p className="mt-auto">
          <span className="text-[#e89700]">Nyheder</span> | {item.duration}{" "}
          minuter
        </p>
      </div>
    </section>
  );
};

export default VideoArticle2;
