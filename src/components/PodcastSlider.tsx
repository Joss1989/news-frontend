"use client"

import { getPodcast, Podcast } from "@/data/podcastData";
import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import PodcastCard from "./PodcastCard";

const PodcastSlider = () => {
  const [podcast, setPodcast] = useState<Podcast[]>([])
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect kører når komponenten loader første gang
  useEffect(() => {
    getPodcast().then(setPodcast);// Hent podcast og opdater state
  }, []) // Tom dependencies-array betyder kun kør én gang

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? podcast.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === podcast.length - 1 ? 0 : prev + 1
    );
  };
  
  return (
    <>
      <section className="col-span-4 pb-2 pt-5 ">
        <h2>Podcast</h2>
      </section>
      <section className="col-span-4">
        <section className="overflow-x-hidden">
          <ol className="grid grid-flow-col auto-cols-[550px] gap-x-5 transition-transform duration-1000 ease-in-out " style={{ transform: `translateX(-${currentIndex  * 39 }%)` }}>
            {podcast.map((item) => (
              <PodcastCard key={item._id} podcast={item} />
            ))}
          </ol>
        </section>
        <section className="text-3xl flex items-center w-full justify-center gap-x-5 mt-4">
          <button className="cursor-pointer" type="button" onClick={handlePrev}>
            <IoIosArrowDropleft />
          </button>
          <button className="cursor-pointer" type="button" onClick={handleNext}>
            <IoIosArrowDropright />
          </button>
        </section>
      </section>
    </>
  );
};

export default PodcastSlider;
