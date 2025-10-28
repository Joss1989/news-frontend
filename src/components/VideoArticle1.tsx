import { Video } from "@/data/videoData";

interface VideoProps {
  items: Video[];
}
const VideoArticle1 = ({ items }: VideoProps) => {
  return (
    <>
      <section className="col-span-4 pb-2 pt-5 ">
        <h2>Video</h2>
      </section>
      <section className=" grid col-span-4 pt-10 md:pt-0 md:col-span-2 gap-5 h-full">
        {items.map((item) => (
          <article key={item._id} className="grid grid-cols-1 md:grid-cols-2 col-span-4 md:col-span-2 gap-x-2 h-full">
              <video controls className="h-full">
                <source
                  src={`http://localhost:3001/assets/video/${item.url}`}
                  type="video/mp4"
                />
              </video>
              <div className="flex flex-col">
                <h3>
                  <strong>{item.title}</strong>
                </h3>
                <p className="leading-5">{item.description}</p>
                <p className="mt-auto">
                  <span className="text-[#e89700]">Nyheder</span> | {item.duration}{" "}
                  minuter
                </p>
              </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default VideoArticle1;
