import { getPodcast } from "@/data/podcastData";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Podcast = async () => {
  const podcast = await getPodcast();

  return (
    <>
      <section className="col-span-4 pb-2 pt-5 ">
        <h2>Podcast</h2>
      </section>
      <section className="col-span-4">
        <ol className="flex gap-x-5 overflow-x-scroll">
          {podcast.map((items) => (
            <li key={items._id} className="bg-white border p-6 flex gap-x-5 min-w-[600px]">
              <img
                src={`http://localhost:3001/assets/podcast/${items.thumbnail}`}
                alt={items.headline}
                className="size-[200px]"
              />
              <section className="flex flex-col">
                <h3>{items.headline}</h3>
                <p>{items.info}</p>
                <p>{items.length}</p>
                <video controls className="w-full">
                  <source
                    src={`http://localhost:3001/assets/podcast/${items.podcast}`}
                    type="video/mp4"
                  />
                </video>
              </section>
            </li>
          ))}
        </ol>
        <section className="text-2xl flex items-center w-full justify-center gap-x-5">
          <button type="button"><IoIosArrowDropleft /></button>
          <button type="button"><IoIosArrowDropright /></button>
        </section>
      </section>
    </>
  );
};

export default Podcast;
