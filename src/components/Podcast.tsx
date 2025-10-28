import { getPodcast} from "@/data/podcastData";

const Podcast = async () => {
  const podcast = await getPodcast();

  return (
    <>
      <section className="col-span-4 pb-2 pt-5 ">
        <h2>Podcast</h2>
      </section>
      <section>
        {podcast.map((items) => (
          <article key={items._id}>
            
          </article>
        ))}
      </section>
    </>
  );
};

export default Podcast;
