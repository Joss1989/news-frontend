import PodcastCard from "@/components/PodcastCard";
import { getPodcast } from "@/data/podcastData";

const page = async () => {
  const podcasts = await getPodcast();

  return (
    <>
      <section className="col-span-4 relative w-full">
        <img className="w-full h-auto object-cover" src="/podcast.jpg" alt="" />
        <p
          className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-2xl sm:text-3xl md:text-5xl text-white bg-[#d79d00] font-semibold p-3 sm:p-5 pb-8 sm:pb-12  max-w-[90%] sm:max-w-md"
        >
          Lorem ipsum dolor sit.
        </p>
      </section>
      <ul className="col-span-4 flex flex-col gap-y-10 mt-10">
        {podcasts?.map((item) => (
          <PodcastCard key={item._id} podcast={item} />
        ))}
      </ul>
    </>
  );
};

export default page;
