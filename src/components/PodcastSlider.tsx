"use client"

import { getPodcast, Podcast } from "@/data/podcastData";
import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

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
          <ol className="flex gap-x-5 transition-transform duration-1000 ease-in-out h-[200px]" style={{ transform: `translateX(-${currentIndex  * 450 }px)` }}>
            {podcast.map((items) => (
              <li key={items._id} className="bg-white border p-6 flex gap-x-5 min-w-[600px] ">
                <img
                  src={`http://localhost:3001/assets/podcast/${items.thumbnail}`}
                  alt={items.headline}
                  
                />
                <section className="flex flex-col">
                  <h3><strong>{items.headline}</strong></h3>
                  <p>{items.info}</p>
                  <p>{items.length} <span>minutter</span></p>
                  <audio controls className="mt-auto">
                    <source
                      src={`http://localhost:3001/assets/podcast/${items.podcast}`}
                      type="audio/mp3"
                    />
                  </audio>
                </section>
              </li>
            ))}
          </ol>
        </section>
        <section className="text-2xl flex items-center w-full justify-center gap-x-5 mt-4">
          <button type="button" onClick={handlePrev}>
            <IoIosArrowDropleft />
          </button>
          <button type="button" onClick={handleNext}>
            <IoIosArrowDropright />
          </button>
        </section>
      </section>
    </>
  );
};

export default PodcastSlider;
